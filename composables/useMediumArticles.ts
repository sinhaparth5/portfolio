import { ref, onMounted } from 'vue';

export function useMediumArticles() {
    const articles = ref<any[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchArtilces = async () => {
        try {
            const mediumUsername = 'parth-sinha';
            const response = await fetch(
                `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
            );
            const data = await response.json();
            articles.value = data.items
                .map((item: any) => ({
                    title: item.title,
                    description: item.description.replace(/<[^>]*>/g, '').slice(0, 150),
                    img: item.thumbnail,
                    link: item.link,
                    pubDate: new Date(item.pubDate),
                }))
                .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
        } catch (err) {
            error.value = 'Failed to fetch articles';
        } finally {
            loading.value = false;
        }
    }
}