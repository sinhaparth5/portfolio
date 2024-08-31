import { ref, onMounted } from "vue";
import type { Item } from 'types/Item';

export const useArticle = () => {
    const items = ref<Item[] | null>(null);
    const pending = ref(true);
    const error = ref<string | null>(null);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:8001/articles')
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            items.value = await response.json();
        } catch (err) {
            error.value = 'Failed to fetch items';
            console.error(err);
        } finally {
            pending.value = false;
        }
    };

    onMounted(() => {
        fetchItems();
    });

    return {
        items,
        pending,
        error,
        fetchItems,
    };
};

