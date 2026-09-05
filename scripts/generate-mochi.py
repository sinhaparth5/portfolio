"""Generate the matching SVG pose family used by DeskPet."""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / 'src/assets/mochi-cat'
INK = '#593720'
WHITE = '#faf5f1'
PINK = '#f5c5bf'

def path(d, fill='none', stroke=INK, width=2.7, cls=''):
    return f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round" class="{cls}"/>'

def ellipse(x, y, rx, ry, fill, stroke='none', width=2.5):
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>'

def eyes(mood):
    if mood in ('blink', 'sleep'):
        return path('M40 65q4 3 8 0m19 0q4 3 8 0', width=2.8)
    if mood in ('happy', 'love', 'eat', 'stretch'):
        return path('M40 64q4-6 8 0m19 0q4-6 8 0', width=2.8)
    if mood == 'angry':
        return path('M39 59l10 5m17 0 10-5', width=2.8) + ellipse(45,66,2,3,INK) + ellipse(71,66,2,3,INK)
    if mood == 'sad':
        return path('M39 59l9-3m19 0 9 3', width=2) + ellipse(44,66,2.4,3,INK) + ellipse(71,66,2.4,3,INK)
    if mood == 'surprised':
        return ellipse(44,64,4.3,5,INK) + ellipse(71,64,4.3,5,INK) + ellipse(45,62,1.3,1.3,WHITE) + ellipse(72,62,1.3,1.3,WHITE)
    return ellipse(42,64,4.1,4.1,INK) + ellipse(75,62,4.1,4.1,INK)

def face(mood):
    out = '<g class="mochi-face" transform="translate(0 -9)">' + ellipse(34,72,6,3.2,PINK) + ellipse(81,72,6,3.2,PINK) + eyes(mood)
    if mood == 'surprised':
        out += ellipse(57.5,75,3.4,4.4,INK)
    elif mood == 'sad':
        out += path('M53 77q5-5 10 0',width=2)
        out += path('M79 69q-5 7 0 8q5-1 0-8', '#b9deed', 'none')
    elif mood == 'sleep':
        out += path('M54 74q4 3 8 0',width=2)
    else:
        out += path('M52 70q0 7 6 2q5 5 8-2',width=2.6)
        if mood in ('happy','play'):
            out += path('M53 77q5 10 10 0','#e9a2b0',INK,1.5)
    return out + '</g>'

def heart(x,y,scale=1):
    return f'<g transform="translate({x} {y}) scale({scale})">'+path('M0 4C-8-5-14 6 0 15C14 6 8-5 0 4Z','#e7a0b2','none')+'</g>'

poses = ['idle','blink','walk-1','walk-2','run-1','run-2','eat','sleep','angry','happy','love','surprised','sad','play','stretch']
for pose in poses:
    is_step = pose.startswith(('walk','run'))
    mood = 'idle' if is_step else pose
    transform = ''
    if pose == 'sleep': transform = 'translate(-3 24) scale(1.06 .74)'
    elif pose == 'stretch': transform = 'translate(-5 16) scale(1.1 .84)'
    elif pose == 'run-1': transform = 'translate(-5 9) scale(1.08 .9) rotate(-4 60 70)'
    elif pose == 'run-2': transform = 'translate(4 -5) scale(.96 1.04) rotate(3 60 70)'
    elif pose == 'walk-1': transform = 'rotate(-2 60 75)'
    elif pose == 'walk-2': transform = 'translate(0 -2) rotate(2 60 75)'
    elif pose == 'surprised': transform = 'translate(3 -5) scale(.95 1.05)'
    s = [f'<svg viewBox="0 0 120 112" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Mochi Mochi cat, {pose}</title>']
    s.append(ellipse(60,101,37,4,'#ece9e8'))
    s.append(f'<g class="mochi-body" transform="{transform}">')
    # Cream Mochi Mochi character: oversized round head, side-set ears and a small body.
    s.append(path('M86 91Q104 91 110 77Q113 70 108 70Q102 70 99 77L88 80',WHITE,cls='mochi-tail'))
    s.append(path('M39 70C31 82 33 101 46 105Q54 109 59 103Q69 109 81 102C92 96 94 81 83 72Z',WHITE))
    s.append(path('M83 81Q88 96 75 102',stroke='#efdcd1',width=4))
    s.append(path('M18 46Q10 43 10 34Q12 29 27 27C42 10 68 9 85 19Q92 15 100 16Q105 17 101 36C110 51 108 70 93 79C76 89 48 88 30 80Q16 74 18 46Z',WHITE))
    s.append(path('M15 35Q21 31 27 32L23 36 28 35 23 39 26 40 20 44Z','#efb7aa','none'))
    s.append(path('M89 22Q94 20 99 21L97 32 93 29 96 28 90 26 95 25Z','#efb7aa','none'))
    s.append(path('M102 45Q108 68 91 76',stroke='#f0ddd2',width=3))
    s.append(face(mood))
    if pose == 'play':
        s.append(path('M30 80q-12-14-15-5q-1 8 15 13',WHITE))
        s.append(path('M82 80q17-13 19-4q0 8-18 12',WHITE))
    elif pose == 'eat':
        s.append(path('M38 84q2-13 8-11q8 4 5 14m16 0q-4-13 4-14q7-1 9 12',WHITE))
    else:
        left_y = 103 if pose in ('walk-1','run-2') else 101
        right_y = 103 if pose in ('walk-2','run-1') else 101
        s.append(path('M44 83q-6 5-1 9q5 4 10 0',WHITE,width=2.5))
        s.append(ellipse(44,left_y,8,5,WHITE,INK,2.4))
        s.append(ellipse(78,right_y,8,5,WHITE,INK,2.4))
    s.append('</g>')
    if pose == 'love':s.append('<g class="mochi-hearts">'+heart(18,25,.7)+heart(100,15,.9)+heart(62,5,.65)+'</g>')
    if pose == 'happy':s.append(path('M10 47v-7m-4 3h8m90-8v-8m-4 4h8',stroke='#d9b356',width=2))
    if pose == 'angry':s.append(path('M94 29v-5h6m-6 9v5h6',stroke='#cb7878',width=2.3,cls='mochi-emote'))
    if pose == 'surprised':s.append(path('M104 36l3-9m-1 14v1',stroke=INK,width=3))
    if pose == 'sleep':s.append('<g class="mochi-zzz" fill="#928487" font-family="sans-serif" font-weight="600"><text x="81" y="45" font-size="13">z</text><text x="95" y="31" font-size="17">z</text></g>')
    if pose == 'eat':
        s.append('<g class="mochi-snack">'+path('M46 84Q58 76 72 84L68 99H50Z','#f5d4a1',INK,2)+path('M49 88h20',stroke='#bd966e',width=1.5)+'</g>')
    if pose == 'play':
        s.append('<g class="mochi-ball">'+ellipse(15,91,10,10,'#d9cfef',INK,2)+path('M9 84q14 8 11 15M7 93q10-8 15-6',stroke='#9a89bd',width=1.4)+'</g>')
    if pose == 'stretch':s.append(path('M23 102h17m37 0h19',stroke=INK,width=3))
    s.append('</svg>')
    (OUT / f'{pose}.svg').write_text('\n'.join(s)+'\n')
