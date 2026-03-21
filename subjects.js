const SUBJECTS = [
    {
        id: 1,
        q1: "Soit la fonction \\( f \\) définie sur \\( \\mathbb{R} \\) par \\( f(x) = 3x^2 - 4x + 1 \\). Calculer l'intégrale \\( I = \\int_{-1}^{2} f(x) \\, dx \\).",
        q2: "Sur l'intervalle \\( [0 ; 1] \\), justifier que \\( 1 \\leq e^x \\leq e \\). En déduire un encadrement strict de l'intégrale \\( \\int_{0}^{1} e^x \\, dx \\).",
        correction: "<strong>Q1:</strong> Une primitive de \\( 3x^2-4x+1 \\) est \\( F(x) = x^3 - 2x^2 + x \\). Ainsi, \\( I = F(2) - F(-1) = (8 - 8 + 2) - (-1 - 2 - 1) = 2 - (-4) = 6 \\).<br/><br/><strong>Q2:</strong> La fonction exponentielle est croissante sur \\( \\mathbb{R} \\), donc pour \\( x \\in [0 ; 1] \\), on a \\( e^0 \\leq e^x \\leq e^1 \\), soit \\( 1 \\leq e^x \\leq e \\). Par intégration des inégalités sur \\( [0 ; 1] \\), on obtient \\( \\int_0^1 1 dx \\leq \\int_0^1 e^x dx \\leq \\int_0^1 e dx \\), ce qui donne \\( 1 \\leq \\int_0^1 e^x dx \\leq e \\)."
    },
    {
        id: 2,
        q1: "Déterminer la primitive \\( F \\) de la fonction \\( f(x) = \\frac{2x}{x^2 + 1} \\) sur \\( \\mathbb{R} \\) qui s'annule en \\( x = 1 \\).",
        q2: "Calculer la valeur moyenne de la fonction \\( g(x) = e^{-2x} \\) sur l'intervalle \\( [0 ; \\ln(2)] \\).",
        correction: "<strong>Q1:</strong> La fonction est de la forme \\( \\frac{u'}{u} \\). Sa primitive générale est \\( \\ln(x^2+1) + C \\). \\( F(1) = 0 \\iff \\ln(2) + C = 0 \\iff C = -\\ln(2) \\). Donc \\( F(x) = \\ln(x^2+1) - \\ln(2) \\).<br/><br/><strong>Q2:</strong> \\( \\mu = \\frac{1}{\\ln(2)-0} \\int_0^{\\ln(2)} e^{-2x} \\, dx \\). Une primitive est \\( [-\\frac{1}{2}e^{-2x}]_0^{\\ln(2)} = -\\frac{1}{2}(e^{-2\\ln(2)} - 1) = -\\frac{1}{2}(\\frac{1}{4} - 1) = \\frac{3}{8} \\). Donc \\( \\mu = \\frac{3}{8\\ln(2)} \\)."
    },
    {
        id: 3,
        q1: "Calculer l'aire, en unités d'aire, du domaine délimité par la courbe représentative de \\( f(x) = \\sqrt{x} \\), l'axe des abscisses et les droites d'équation \\( x = 1 \\) et \\( x = 4 \\).",
        q2: "Soit \\( I = \\int_{0}^{1} \\frac{e^x}{1+e^x} \\, dx \\) et \\( J = \\int_{0}^{1} \\frac{1}{1+e^x} \\, dx \\). Calculer \\( I + J \\), puis en déduire la valeur exacte de \\( J \\).",
        correction: "<strong>Q1:</strong> Aire = \\( \\int_1^4 x^{1/2} \\, dx = [ \\frac{x^{3/2}}{3/2} ]_1^4 = \\frac{2}{3} (4^{3/2} - 1^{3/2}) = \\frac{2}{3}(8 - 1) = \\frac{14}{3} \\) u.a.<br/><br/><strong>Q2:</strong> Par linéarité, \\( I+J = \\int_0^1 \\frac{e^x+1}{1+e^x} \\, dx = \\int_0^1 1 \\, dx = 1 \\). D'autre part, \\( I = [\\ln(1+e^x)]_0^1 = \\ln(1+e) - \\ln(2) \\). Donc \\( J = 1 - I = 1 - \\ln(\\frac{1+e}{2}) \\)."
    },
    {
        id: 4,
        q1: "On considère la fonction \\( f(x) = x e^{x^2 - 1} \\). Déterminer l'intégrale \\( \\int_{0}^{1} f(x) \\, dx \\).",
        q2: "Démontrer que pour tout \\( x \\in [1 ; 2] \\), on a \\( 0.5 \\leq \\frac{1}{x} \\leq 1 \\). En déduire un encadrement de \\( \\int_{1}^{2} \\frac{e^x}{x} \\, dx \\).",
        correction: "<strong>Q1:</strong> On reconnaît une forme \\( \\frac{1}{2} \\times 2x e^{x^2-1} \\) soit \\( \\frac{1}{2}u'e^u \\). Primitive: \\( \\frac{1}{2}e^{x^2-1} \\). Intégrale = \\( \\frac{1}{2}(e^0 - e^{-1}) = 0.5(1 - 1/e) \\).<br/><br/><strong>Q2:</strong> La fonction inverse est décroissante sur \\( [1;2] \\), donc \\( 1 \\leq x \\leq 2 \\implies \\frac{1}{2} \\leq \\frac{1}{x} \\leq 1 \\). On multiplie par \\( e^x > 0 \\), donnant \\( \\frac{1}{2}e^x \\leq \\frac{e^x}{x} \\leq e^x \\). En intégrant, \\( \\frac{1}{2}(e^2-e) \\leq \\int_1^2 \\frac{e^x}{x}\\,dx \\leq e^2-e \\)."
    },
    {
        id: 5,
        q1: "Soient \\( f(x) = x^2 \\) et \\( g(x) = x^3 \\). Déterminer l'aire du domaine compris entre les courbes de \\( f \\) et \\( g \\) sur l'intervalle \\( [0 ; 1] \\).",
        q2: "Sans calculer d'intégrale, déduire le signe de \\( \\int_{1}^{2} \\frac{1 - \\ln(x)}{x^2} \\, dx \\). Justifier.",
        correction: "<strong>Q1:</strong> Sur \\( [0;1] \\), \\( x^2 \\geq x^3 \\), la fonction à intégrer est \\( x^2 - x^3 \\). Primitive : \\( \\frac{x^3}{3} - \\frac{x^4}{4} \\). En \\( 1 \\), on a \\( \\frac{1}{3} - \\frac{1}{4} = \\frac{1}{12} \\) d'unité d'aire.<br/><br/><strong>Q2:</strong> Sur \\( [1;2] \\), \\( \\ln(x) \\leq \\ln(2) < 1 \\). Donc \\( 1 - \\ln(x) > 0 \\). Comme \\( x^2 > 0 \\), la fonction est strictement positive. Par la propriété de positivité des intégrales sur des bornes croissantes, l'intégrale est strictement positive."
    },
    {
        id: 6,
        q1: "Déterminer les réels \\( a \\) et \\( b \\) tels que pour tout \\( x \\neq -1 \\), \\( \\frac{1}{x+1} + \\frac{1}{(x+1)^2} = \\frac{ax+b}{(x+1)^2} \\). En déduire \\( \\int_{0}^{1} \\frac{x+2}{(x+1)^2} \\, dx \\).",
        q2: "Calculer la valeur moyenne exacte de la fonction \\( f(x) = \\sin(x) \\) sur l'intervalle \\( [0 ; \\pi] \\).",
        correction: "<strong>Q1:</strong> On met au même dénominateur: \\( \\frac{x+1+1}{(x+1)^2} = \\frac{x+2}{(x+1)^2} \\) donc \\( a=1, b=2 \\). L'intégrale est donc \\( [\\ln(x+1) - \\frac{1}{x+1}]_0^1 = (\\ln 2 - 1/2) - (0 - 1) = \\ln 2 + \\frac{1}{2} \\).<br/><br/><strong>Q2:</strong> La formule de la valeur moyenne donne \\( \\mu = \\frac{1}{\\pi - 0} \\int_0^\\pi \\sin(x) \\, dx = \\frac{1}{\\pi} [-\\cos(x)]_0^\\pi = \\frac{1}{\\pi} (-(-1) - (-1)) = \\frac{2}{\\pi} \\)."
    },
    {
        id: 7,
        q1: "Calculer l'intégrale \\( J = \\int_{0}^{\\pi} \\cos(2x - \\frac{\\pi}{2}) \\, dx \\).",
        q2: "La courbe d'une fonction \\( f \\) positive sur \\( [0 ; 4] \\) est entièrement contenue dans un rectangle de hauteur 3. Que peut-on dire de \\( \\int_{0}^{4} f(x) \\, dx \\) ? Justifier l'aide d'un argument géométrique.",
        correction: "<strong>Q1:</strong> Primitive de \\( \\cos(ax+b) \\) est \\( \\frac{1}{a} \\sin(ax+b) \\). Ici, \\( [\\frac{1}{2} \\sin(2x - \\pi/2)]_0^\\pi \\). En \\( \\pi \\) : \\( \\sin(3\\pi/2) = -1 \\). En \\( 0 \\) : \\( \\sin(-\\pi/2) = -1 \\). \\( J = 1/2(-1 - (-1)) = 0 \\).<br/><br/><strong>Q2:</strong> \\( f \\) est minorée par 0 et majorée par 3. Géométriquement, l'aire sous \\( f \\) est comprise entre 0 et l'aire du grand rectangle qui est \\( 4 \\times 3 = 12 \\). Donc \\( 0 \\leq \\int_0^4 f(x) dx \\leq 12 \\)."
    },
    {
        id: 8,
        q1: "Donner une fonction \\( F \\), primitive de \\( f(x) = (2x+1)e^{x^2+x} \\) sur \\( \\mathbb{R} \\).",
        q2: "Déterminer le réel \\( c > 0 \\) tel que la valeur moyenne de la fonction \\( h(x) = x^2 \\) sur \\( [0; c] \\) soit égale à 3.",
        correction: "<strong>Q1:</strong> On remarque une forme parfaite \\( u'(x)e^{u(x)} \\) avec \\( u(x) = x^2+x \\). Une primitive est donc \\( F(x) = e^{x^2+x} \\).<br/><br/><strong>Q2:</strong> La valeur moyenne est \\( \\frac{1}{c} \\int_0^c x^2 \\, dx = \\frac{1}{c} \\frac{c^3}{3} = \\frac{c^2}{3} \\). On veut \\( \\frac{c^2}{3} = 3 \\implies c^2 = 9 \\). Or \\( c > 0 \\), d'où \\( c = 3 \\)."
    },
    {
        id: 9,
        q1: "Calculer l'intégrale \\( K = \\int_{1}^{e} \\frac{\\ln(x)}{x} \\, dx \\).",
        q2: "Les primitives d'une même fonction continue \\( f \\) sont-elles uniques ? Expliquer mathématiquement en quoi elles diffèrent.",
        correction: "<strong>Q1:</strong> \\( \\frac{\\ln(x)}{x} = \\frac{1}{x} \\ln(x) = u' \\times u \\). La primitive est donc \\( \\frac{1}{2} (\\ln x)^2 \\). Entre 1 et \\( e \\), cela donne \\( \\frac{1}{2}(1^2 - 0) = \\frac{1}{2} \\).<br/><br/><strong>Q2:</strong> Non, une fonction continue admet une infinité de primitives. Si \\( F \\) est une primitive de \\( f \\), alors toute autre primitive \\( G \\) peut s'écrire sous la forme \\( G(x) = F(x) + k \\) où \\( k \\) est une constante réelle. Elles ne diffèrent que par cette constante."
    },
    {
        id: 10,
        q1: "Calculer la valeur moyenne sur \\( [-1 ; 1] \\) de la fonction \\( h(x) = x^3 - x \\). Vérifier et expliquer le résultat géométriquement.",
        q2: "Démontrer que si \\( f \\) est continue et impaire sur \\( [-a ; a] \\), alors \\( \\int_{-a}^{a} f(x) \\, dx = 0 \\).",
        correction: "<strong>Q1:</strong> Primitive: \\( \\frac{x^4}{4} - \\frac{x^2}{2} \\). En calculant l'intégrale on obtient 0. La valeur moyenne est 0. Géométriquement, l'aire située au-dessus de l'axe compense exactement l'aire située au-dessous par symétrie.<br/><br/><strong>Q2:</strong> Par le changement de variable \\( t = -x \\) ou par argument géométrique, la représentation d'une fonction impaire présente une symétrie centrale. Les aires algébriques sur \\( [-a ; 0] \\) et \\( [0 ; a] \\) s'annulent : \\( \\int_{-a}^0 f = -\\int_0^a f \\)."
    },
    {
        id: 11,
        q1: "Déterminer une primitive de \\( f(x) = \\frac{e^{\\frac{1}{x}}}{x^2} \\) sur \\( ]0 ; +\\infty[ \\).",
        q2: "Calculer l'aire du domaine situé sous la courbe de la fonction exponentielle et au dessus de l'axe des abscisses, entre \\( x = 0 \\) et \\( x = \\ln(5) \\).",
        correction: "<strong>Q1:</strong> Si on pose \\( u(x) = 1/x \\), \\( u'(x) = -1/x^2 \\). La fonction est de la forme \\( -u'e^u \\). Une primitive est donc \\( F(x) = -e^{1/x} \\).<br/><br/><strong>Q2:</strong> L'aire est calculable par \\( \\int_0^{\\ln(5)} e^x \\, dx \\) car \\( e^x > 0 \\). On trouve \\( [e^x]_0^{\\ln(5)} = e^{\\ln(5)} - e^0 = 5 - 1 = 4 \\) unités d'aire."
    },
    {
        id: 12,
        q1: "Calculer \\( \\int_{1}^{2} \\left( \\frac{1}{x} - \\frac{1}{x^2} \\right) \\, dx \\).",
        q2: "Vérifier la relation de Chasles pour la fonction valeur absolue. Calculer judicieusement \\( \\int_{-1}^{1} |x| \\, dx \\).",
        correction: "<strong>Q1:</strong> Les primitives sont \\( \\ln(|x|) \\) et \\( \\frac{1}{x} \\). Évaluation entre 1 et 2: \\( (\\ln 2 + 1/2) - (\\ln 1 + 1/1) = \\ln(2) - 0.5 \\).<br/><br/><strong>Q2:</strong> La valeur absolue s'annule en 0. On coupe l'intégrale en deux : \\( \\int_{-1}^0 -x \\, dx + \\int_0^1 x \\, dx = [-\\frac{x^2}{2}]_{-1}^0 + [\\frac{x^2}{2}]_0^1 = \\frac{1}{2} + \\frac{1}{2} = 1 \\)."
    },
    {
        id: 13,
        q1: "Soit \\( f(x) = \\cos(x) \\sin(x) \\). Déterminer toutes les primitives de \\( f \\) sur \\( \\mathbb{R} \\).",
        q2: "Montrer que \\( F(x) = (x^2 - 2x + 2)e^x \\) est une primitive de \\( f(x) = x^2 e^x \\). En déduire le calcul de \\( \\int_{0}^{1} x^2 e^x \\, dx \\).",
        correction: "<strong>Q1:</strong> \\( \\cos(x)\\sin(x) \\) est de la forme \\( u' \\times u \\) (en posant \\( u=\\sin x \\)). Toutes les primitives sont \\( \\frac{1}{2}\\sin^2(x) + C \\).<br/><br/><strong>Q2:</strong> \\( F'(x) = (2x-2)e^x + (x^2-2x+2)e^x = x^2 e^x = f(x) \\). L'intégrale vaut \\( [F(x)]_0^1 = F(1) - F(0) = (1-2+2)e^1 - (0-0+2)e^0 = e - 2 \\)."
    },
    {
        id: 14,
        q1: "Calculer l'intégrale \\( \\int_{0}^{\\ln(3)} \\frac{e^{2x}}{e^{2x} + 1} \\, dx \\).",
        q2: "Démontrer la relation de Chasles pour l'intégrale en justifiant par l'aire sous la courbe (cas où la fonction est positive et continue).",
        correction: "<strong>Q1:</strong> Si on pose \\( u = e^{2x}+1 \\), on a \\( u' = 2e^{2x} \\). On a donc \\( \\frac{1}{2}\\int \\frac{u'}{u} \\). La primitive est \\( \\frac{1}{2}\\ln(e^{2x}+1) \\). L'intégrale vaut \\( \\frac{1}{2}(\\ln(9+1) - \\ln(1+1)) = \\frac{1}{2}\\ln 5 \\).<br/><br/><strong>Q2:</strong> L'intégrale de \\( a \\) à \\( c \\) d'une fonction positive correspond à l'aire sous la courbe. Si \\( b \\) est entre \\( a \\) et \\( c \\), on peut découper ce domaine en deux: de \\( a \\) à \\( b \\) puis de \\( b \\) à \\( c \\). L'aire totale est la somme des deux aires, ce qui illustre graphiquement la relation."
    },
    {
        id: 15,
        q1: "Donner la forme explicite de la fonction \\( F(x) = \\int_{0}^{x} (2t+3) \\, dt \\).",
        q2: "La fonction \\( F \\) précédente est-elle dérivable ? Quelle est sa dérivée ? Justifier en énonçant la clé du théorème de dérivation des intégrales.",
        correction: "<strong>Q1:</strong> On trouve la primitive : \\( F(x) = [t^2+3t]_0^x = x^2+3x - 0 = x^2+3x \\).<br/><br/><strong>Q2:</strong> Oui, \\( F \\) est dérivable. D'après le théorème fondamental de l'analyse, l'intégrale d'une fonction continue de \\( a \\) à \\( x \\) est l'unique primitive s'annulant en \\( a \\). Sa dérivée est donc la fonction interne : \\( F'(x) = 2x+3 \\)."
    },
    {
        id: 16,
        q1: "Trouver une primitive de \\( g(x) = \\sin(2x) - \\cos(3x) \\).",
        q2: "L'intégrale piège : évaluer \\( \\int_{-2}^{2} x^3 \\cos(x) \\, dx \\) sans chercher de primitive complexe.",
        correction: "<strong>Q1:</strong> Attention aux signes : dérivée de sin est cos, dérivée de cos est -sin. Primitive: \\( -\\frac{1}{2}\\cos(2x) - \\frac{1}{3}\\sin(3x) \\).<br/><br/><strong>Q2:</strong> On note que \\( f(-x) = (-x)^3 \\cos(-x) = -x^3 \\cos(x) = -f(x) \\). La fonction est impaire. L'intégrale d'une fonction continue impaire sur un intervalle symétrique \\( [-a ; a] \\) est toujours NULLE. Résultat = 0."
    },
    {
        id: 17,
        q1: "Résoudre sur \\( \\mathbb{R} \\), l'équation d'inconnue réelle \\( X \\) : \\( \\int_{0}^{X} e^t \\, dt = e - 1 \\).",
        q2: "Montrer que pour tout \\( t \\in [0, 1] \\), on a \\( e^t \\leq e \\). En déduire une majoration de l'intégrale \\( \\int_0^1 t^2 e^t \\, dt \\).",
        correction: "<strong>Q1:</strong> Le calcul de l'intégrale donne \\( e^X - e^0 = e^X - 1 \\). L'équation devient \\( e^X - 1 = e - 1 \\iff e^X = e \\iff X = 1 \\).<br/><br/><strong>Q2:</strong> La fonction exponentielle est croissante. Donc pour \\( t \\leq 1 \\), on a \\( e^t \\leq e^1 = e \\). En multipliant par \\( t^2 \\geq 0 \\), on a \\( t^2 e^t \\leq t^2 e \\). Par croissance de l'intégrale : \\( \\int_0^1 t^2 e^t dt \\leq e \\int_0^1 t^2 dt = e [\\frac{t^3}{3}]_0^1 = \\frac{e}{3} \\)."
    },
    {
        id: 18,
        q1: "Déterminer la primitive de la fonction définie par \\( f(x) = \\frac{1}{2\\sqrt{x}} \\) qui prend la valeur 5 en \\( x = 4 \\).",
        q2: "Démontrer que la fonction \\( G(x) = x \\ln(x) - x \\) est une primitive de la fonction logarithme népérien sur \\( ]0 ; +\\infty[ \\). En déduire l'aire sous \\( \\ln \\) sur \\( [1 ; e] \\).",
        correction: "<strong>Q1:</strong> Une primitive générale de \\( \\frac{1}{2\\sqrt{x}} \\) est \\( \\sqrt{x} + C \\). On veut \\( \\sqrt{4} + C = 5 \\iff 2 + C = 5 \\iff C = 3 \\). La primitive cherchée est \\( F(x) = \\sqrt{x} + 3 \\).<br/><br/><strong>Q2:</strong> On dérive \\( G \\) : \\( G'(x) = 1 \\times \\ln(x) + x \\times (1/x) - 1 = \\ln(x) + 1 - 1 = \\ln(x) \\). L'aire vaut \\( \\int_1^e \\ln(x) dx = G(e) - G(1) = (e\\ln(e) - e) - (1\\ln(1) - 1) = (e - e) - (0 - 1) = 1 \\)."
    },
    {
        id: 19,
        q1: "Calculer \\( I = \\int_{-2}^{2} (x^3 + x) \\, dx \\). Peut-on anticiper le résultat par une propriété géométrique ?",
        q2: "Si l'on sait que \\( \\int_a^b f(x) dx < 0 \\), la fonction \\( f \\) est-elle obligatoirement négative partout sur \\( [a, b] \\) ? Justifier avec un exemple si besoin.",
        correction: "<strong>Q1:</strong> La fonction \\( f(x) = x^3 + x \\) est impaire (\\( f(-x) = -f(x) \\)). L'intégrale sur un intervalle parfaitement symétrique par rapport à zéro \\( [-2 ; 2] \\) est nulle.\\( I = 0 \\).<br/><br/><strong>Q2:</strong> Non, la fonction n'est pas obligatoirement strictement négative partout. Il suffit que la \"somme algébrique\" des aires donne un bilan négatif. Par exemple la fonction \\( f(x) = x \\) sur \\( [-2, 1] \\) a une intégrale valant \\( -1.5 \\) bien qu'elle soit positive sur \\( [0, 1] \\)."
    },
    {
        id: 20,
        q1: "Soit \\( P(x) = (ax^2+bx+c)e^{-x} \\). Déterminer \\( a, b, c \\) pour que \\( P'(x) = (-x^2+x+1)e^{-x} \\).",
        q2: "L'intégrale de Vrai/Faux : Si \\( \\int_0^5 f(x)dx > \\int_0^5 g(x)dx \\), a-t-on obligatoirement \\( f(x) > g(x) \\) pour tout \\( x \\) de \\( [0;5] \\) ?",
        correction: "<strong>Q1:</strong> \\( P'(x) = (2ax+b)e^{-x} + (ax^2+bx+c)(-e^{-x}) = [-ax^2 + (2a-b)x + (b-c)]e^{-x} \\). Par identification avec \\( (-x^2+x+1) \\), on obtient \\( -a=-1 \\implies a=1 \\). Puis \\( 2a-b=1 \\implies b=1 \\). Enfin \\( b-c=1 \\implies c=0 \\). Donc \\( P(x) = (x^2+x)e^{-x} \\).<br/><br/><strong>Q2:</strong> C'est faux. L'intégration des inégalités n'est pas réversible localement point par point. Il suffit que le bilan total de l'aire sous \\( f \\) soit supérieur sans que la fonction \\( f \\) soit supérieure à tout instant."
    },
    {
        id: 21,
        q1: "Trouver \\( I = \\int_{0}^{\\frac{\\pi}{4}} -\\sin(x) \\cos^2(x) \\, dx \\).",
        q2: "Calculer l'aire comprise entre les 2 courbes des fonctions \\( f(x) = e^x \\) et \\( g(x) = e^{-x} \\) sur \\( [0; 1] \\).",
        correction: "<strong>Q1:</strong> On remarque la forme \\( u' \\times u^2 \\) avec \\( u(x)=\\cos(x) \\), où \\( u'(x)=-\\sin(x) \\). La primitive est \\( \\frac{\\cos^3(x)}{3} \\). L'intégrale vaut \\( \\frac{\\cos^3(\\pi/4)}{3} - \\frac{\\cos^3(0)}{3} = \\frac{(\\sqrt{2}/2)^3}{3} - \\frac{1}{3} = \\frac{\\sqrt{2}}{12} - \\frac{1}{3} \\).<br/><br/><strong>Q2:</strong> Sur \\( [0;1], e^x \\geq e^{-x} \\). On intègre \\( e^x - e^{-x} \\). Primitive : \\( e^x + e^{-x} \\). En 1 : \\( e + e^{-1} \\). En 0 : \\( e^0 + e^0 = 2 \\). Aire de \\( e + \\frac{1}{e} - 2 \\) u.a."
    },
    {
        id: 22,
        q1: "Calculer l'intégrale de \\( x \\mapsto \\frac{3}{(3x-1)^2} \\) entre les bornes 1 et 2.",
        q2: "Si \\( \\int_{-a}^a \\sin^3(x) dx \\) était posée dans un examen, quelle serait la réponse immédiate et sa justification ?",
        correction: "<strong>Q1:</strong> La forme est \\( u'/u^2 \\) avec \\( u(x)=3x-1 \\). La primitive est \\( -1/u \\). On a donc \\( -1/(3x-1) \\). Entre 1 et 2 : \\( -1/5 - (-1/2) = 1/2 - 1/5 = 3/10 \\).<br/><br/><strong>Q2:</strong> La fonction \\( f(x) = \\sin^3(x) \\) est impaire car \\( \\sin^3(-x) = (-\\sin x)^3 = -\\sin^3(x) \\). L'intégrale sur l'intervalle symétrique \\( [-a ; a] \\) est donc instantanément 0."
    },
    {
        id: 23,
        q1: "Trouver \\( \\alpha \\) et \\( \\beta \\) pour que \\( \\frac{x}{(x-1)^2} = \\frac{\\alpha}{(x-1)^2} + \\frac{\\beta}{x-1} \\).",
        q2: "En déduire le calcul immédiat de \\( \\int_{2}^{3} \\frac{x}{(x-1)^2} \\, dx \\).",
        correction: "<strong>Q1:</strong> On somme : \\( \\frac{\\alpha + \\beta(x-1)}{(x-1)^2} = \\frac{\\beta x + \\alpha - \\beta}{(x-1)^2} \\). Par identification à \\( \\frac{x}{(x-1)^2} \\), on a \\( \\beta = 1 \\) et \\( \\alpha - \\beta = 0 \\implies \\alpha = 1 \\). D'où \\( \\frac{1}{(x-1)^2} + \\frac{1}{x-1} \\).<br/><br/><strong>Q2:</strong> Les primitives respectives sont \\( -\\frac{1}{x-1} \\) et \\( \\ln(x-1) \\). À évaluer de 2 à 3 : \\( (-1/2 + \\ln 2) - (-1 + \\ln 1) = 1/2 + \\ln 2 \\)."
    },
    {
        id: 24,
        q1: "Peut-on affirmer avec les propriétés d'intégrales que \\( \\int_0^1 x^2 \\, dx \\times \\int_0^1 x^3 \\, dx = \\int_0^1 x^5 \\, dx \\) ? Justifier en calculant l'erreur.",
        q2: "Calculer \\( I = \\int_{0}^{1} x \\sqrt{x^2 + 1} \\, dx \\). Que faut-il vérifier pour reconnaitre une formule connue du cours ?",
        correction: "<strong>Q1:</strong> C'est radicalement Faux ! La multiplication des intégrales ne donne pas l'intégrale du produit. Calculons : \\( \\int x^2 dt = 1/3 \\), \\( \\int x^3 dt = 1/4 \\). Leur produit est \\( 1/12 \\). L'intégrale de \\( x^5 \\) vaut \\( 1/6 \\). L'affirmation est absurde.<br/><br/><strong>Q2:</strong> On écrit la fonction comme \\( \\frac{1}{2} (2x)(x^2+1)^{1/2} \\). C'est la forme \\( \\frac{1}{2} u' u^{1/2} \\). La primitive est \\( \\frac{1}{2} \\frac{u^{3/2}}{3/2} = \\frac{1}{3} (x^2+1)\\sqrt{x^2+1} \\). En l'évaluant en 1 et 0, on obtient \\( \\frac{1}{3} (2\\sqrt{2} - 1) \\)."
    },
    {
        id: 25,
        q1: "Déterminer la valeur exacte de la valeur moyenne de la fonction \\( f(x) = x e^{x^2} \\) sur \\( [0, 2] \\).",
        q2: "En exploitant la relation de Chasles, simplifier au maximum l'expression complexe : \\( \\int_{1}^{4} g(x) \\, dx + \\int_{4}^{7} g(x) \\, dx - \\int_{1}^{7} g(x) \\, dx \\).",
        correction: "<strong>Q1:</strong> La valeur moyenne est \\( \\frac{1}{2-0} \\int_0^2 x e^{x^2} \\, dx \\). La primitive de \\( x e^{x^2} \\) est \\( \\frac{1}{2} e^{x^2} \\). L'intégrale vaut \\( \\frac{1}{2}(e^4 - e^0) = \\frac{1}{2}(e^4-1) \\). La valeur moyenne vaut la moitié, soit \\( \\frac{e^4 - 1}{4} \\).<br/><br/><strong>Q2:</strong> Par la relation de Chasles, la somme des deux premières intégrales vaut directement \\( \\int_1^7 g(x) dx \\). En soustrayant cette même intégrale à la fin, on obtient un bilan net parfait de 0."
    },
    {
        id: 26,
        q1: "Résoudre l'équation d'inconnue \\( a > 0 \\) valant \\( \\int_{0}^{a} (2x - 3) \\, dx = 0 \\).",
        q2: "Soient \\( f \\) et \\( g \\) continues sur \\( [0 ; 1] \\). Si \\( f(x) \\leq g(x) \\) sur \\( [0 ; 1] \\), quel théorème clé permet de classer les résultats de leurs intégrales ?",
        correction: "<strong>Q1:</strong> La primitive est \\( x^2 - 3x \\). On a donc \\( a^2 - 3a - 0 = 0 \\iff a(a - 3) = 0 \\). Sachant que \\( a > 0 \\), l'unique solution pour annuler toutes les aires sous la courbe est \\( a = 3 \\).<br/><br/><strong>Q2:</strong> C'est le théorème de la \"Conservation de l'ordre\" pour les intégrales (aussi appelé théorème de croissance). Si les bornes vont dans l'ordre croissant (\\( 0 \\leq 1 \\)), alors l'ordre de l'intégrande est conservé dans le résultat total générant l'aire."
    },
    {
        id: 27,
        q1: "Calculer l'intégrale de \\( x \\mapsto \\frac{e^x}{e^x+2} \\) entre \\( \\ln 2 \\) et \\( \\ln 5 \\).",
        q2: "Trouver la seule primitive sur \\( ]0 ; +\\infty[ \\) de la fonction \\( j(x) = \\frac{3}{3x+1} \\) qui s'annule en \\( x = 0 \\).",
        correction: "<strong>Q1:</strong> La fonction demandée a la forme \\( u'/u \\). La primitive est \\( \\ln(e^x+2) \\). Pour la borne sup on a \\( \\ln(5+2) = \\ln(7) \\). Pour la borne inf on a \\( \\ln(2+2) = \\ln(4) \\). Le tout vaut \\( \\ln(7/4) \\).<br/><br/><strong>Q2:</strong> Forme \\( u'/u \\) avec \\( u(x)=3x+1 \\). La primitive générale est \\( \\ln(3x+1) + C \\). On cherche \\( C \\) tel que \\( \\ln(1) + C = 0 \\), donc \\( C=0 \\). La primitive exigée est simplement \\( \\ln(3x+1) \\)."
    },
    {
        id: 28,
        q1: "Calculer l'intégrale de la fonction rationnelle \\( \\frac{1}{(x-1)^2} \\) de \\( x=2 \\) à \\( x=5 \\).",
        q2: "Sans calculer explicitement sa valeur, prouver rigoureusement que \\( \\int_{0}^{\\ln 2} e^{3x} \\, dx \\geq 0 \\).",
        correction: "<strong>Q1:</strong> On reconnaît la forme de la primitive \\( -\\frac{1}{u} \\). La primitive de \\( (x-1)^{-2} \\) est \\( -\\frac{1}{x-1} \\). Évaluée entre 2 et 5 : \\( -\\frac{1}{4} - (-\\frac{1}{1}) = 1 - 0.25 = 0.75 \\).<br/><br/><strong>Q2:</strong> Sur l'intervalle \\( [0 ; \\ln 2] \\), l'exponentielle est strictement positive, donc la fonction à intégrer est positive. Les bornes d'intégration sont dans l'ordre croissant (\\( 0 < \\ln 2 \\)). D'après le théorème de positivité de l'intégrale, l'intégrale est strictement positive."
    },
    {
        id: 29,
        q1: "Calculer l'intégrale l'aire définie en valeur absolue \\( \\int_{1}^{3} |x-2| \\, dx \\) en s'aidant d'un graphique (ou astuce) afin d'éviter les calculs longs.",
        q2: "Déterminer le paramètre réel \\( a \\) positif tel que \\( \\int_{0}^{a} x \\, dx = 8 \\). Tracez rapidement l'idée.",
        correction: "<strong>Q1:</strong> Le graphe de \\( |x-2| \\) a la forme d'un \"V\" centré au point \\( (2, 0) \\). L'aire entre les abscisses 1 et 3 est exactement celle de 2 triangles rectangles isocèles de base 1 et de hauteur 1. L'aire de chaque triangle vaut \\( 1/2 \\), donc l'intégrale complète vaut 1.<br/><br/><strong>Q2:</strong> La primitive est \\( x^2 / 2 \\). Par conséquent, l'équation s'écrit facilement \\( a^2 / 2 = 8 \\implies a^2 = 16 \\). Comme nous cherchons un \\( a \\) strictement positif, le paramètre \\( a \\) doit être exactement \\( 4 \\)."
    },
    {
        id: 30,
        q1: "Le mystère de la linéarité : Sachant formellement que \\( \\int_0^1 f(x)dx = 3 \\) et \\( \\int_0^1 g(x)dx = 5 \\), que vaut analytiquement la quantité \\( \\int_0^1 [2f(x) - g(x)] dx \\) ?",
        q2: "On cherche les primitives de \\( x \\mapsto |x| \\). La fonction \\( G(x) = \\frac{x|x|}{2} \\) vous convient-elle ? Justifiez-le brutalement en la dérivant sur les intervalles constants pertinents.",
        correction: "<strong>Q1:</strong> Par le principe fondamental de linéarité des intégrales, on distribue et sort les scalaires constans du bilan global pour obtenir la combinaison : \\( 2 \\int f - \\int g = 2 \\times 3 - 5 = 6 - 5 = 1 \\). L'intégrale vaut 1.<br/><br/><strong>Q2:</strong> Plaçons nous pour \\( x > 0 \\), \\( G(x) = x^2/2 \\) sa dérivée basique est \\( x \\). Plaçons nous de l'autre bord \\( x < 0 \\), \\( G(x) = -x^2/2 \\) sa dérivée basique est \\( -x \\). Dans tous les cas, la dérivée se regroupe élégamment sous la forme requise qui est bien \\( |x| \\) ! La primitive correspond."
    },
    {
        id: 31,
        q1: "L'aire du quart de disque unité exprimée en une ligne mathématique. Justifier géométriquement, sans le calcul intégral des sinus lourd, que l'on admet bien \\( \\int_0^1 \\sqrt{1-x^2} \\, dx = \\frac{\\pi}{4} \\).",
        q2: "Déterminer une primitive globale de la fonction particulière \\( f(x) = (2x+2)e^{x^2+2x} \\).",
        correction: "<strong>Q1:</strong> L'équation fonctionnelle \\( y = \\sqrt{1-x^2} \\iff y^2 + x^2 = 1 \\text{ (pour } y \\geq 0) \\) identifie bien la moitié supérieure du cercle usuel centré de rayon 1. L'intégrale positive de 0 à 1 correspond logiquement au seul quart du disque géométrique orienté. Son aire se traduit de soi par \\( \\frac{\\pi \\times r^2}{4} = \\frac{\\pi}{4} \\).<br/><br/><strong>Q2:</strong> On identifie immédiatement la forme dérivée interne multipliant l'exposant, le type classique \\( u'(x)e^{u(x)} \\), grâce à un petit repérage sur \\( x^2+2x \\). La primitive évidente, aux contraintes près (constante C) se révèle être identiquement \\( e^{x^2+2x} \\)."
    },
    {
        id: 32,
        q1: "Calculer formellement \\( \\int_1^3 \\left(\\frac{1}{x} + 2x\\right) \\, dx \\).",
        q2: "Sans passer par les calculs, prouver que le signe propre de \\( \\int_1^2 \\frac{x^2}{x^4+1} \\, dx \\) est bien strictement positif.",
        correction: "<strong>Q1:</strong> Les primitives brutes, à un facteur correct d'origine sont précisément \\( \\ln(x) \\) et \\( x^2 \\). Il est indispensable de procéder à l'évaluation méthodique en 3 et 1 : on remplace \\( (\\ln 3 + 9) - (\\ln 1 + 1) = \\ln(3) + 9 - 0 - 1 = \\ln 3 + 8 \\).<br/><br/><strong>Q2:</strong> Sur l'intervalle fixe de travail \\( [1 ; 2] \\), le numérateur garantit que \\( x^2 \\geq 1 > 0 \\) et le domaine du dénominateur affiche \\( x^4+1 > 0 \\). La fonction à intégrer est rationnelle, strictement positive, sur un support borné croissant, l'intégrale l'est fermement."
    },
    {
        id: 33,
        q1: "Calculer de façon logique l'intégrale de la fonction de la forme constante \\( f(x)=5 \\), définie abstraitement sur l'intervalle formel \\( [0; x] \\).",
        q2: "Citer avec exactitude le théorème d'existence d'une primitive pour le cas d'une fonction donnée.",
        correction: "<strong>Q1:</strong> Pour une constante plate de niveau k (ici 5), l'aire produite géométriquement sous le palier est le volume strict d'un rectangle conventionnel basique dont la base a une distance de \\( (x - 0) \\). On déduit instantanément que L'intégrale vaut \\( 5x \\).<br/><br/><strong>Q2:</strong> Toute fonction classiquement continue sur un intervalle global spécifique \\( I \\) y admet une primitive. Autrement dit, la continuité structurelle forte garantit de manière suffisante l'existence totale d'une fonction dont elle devient la dérivée."
    },
    {
        id: 34,
        q1: "Calculer \\( \\int_0^{\\frac{\\pi}{2}} (\\sin x + \\cos x) \\, dx \\).",
        q2: "Calculer l'aire, si elle est bien continue sur bornes, contrainte par la parabole symétrique paramétrée par \\( x^2-4x+3 \\) sur l'intervalle délimité strict  \\( [1 ; 3] \\).",
        correction: "<strong>Q1:</strong> Les primitives correspondantes pour ces fonctions trigonométriques périodiques sont naturellement \\( -\\cos x \\) et \\( \\sin x \\). Quand on vient opérer la substitution finale formelle aux bords du support [0, pi/2], cela fournit  \\( (-\\cos(\\pi/2) + \\sin(\\pi/2)) - (-\\cos(0) + \\sin(0)) = (0 + 1) - (-1 + 0) = 2 \\).<br/><br/><strong>Q2:</strong> Calcul d'aire pure signifie calculer l'intégrale absolue si l'intervalle est connu et ordonné. Les bornes sont précisément les racines pures ! La quantité devient intégrable pour son opposé (vers le haut) soit primitive de \\( -x^2+4x-3 \\). C'est \\( -\\frac{x^3}{3} + 2x^2 - 3x \\). En 3 : \\( -9+18-9=0 \\). En 1 : \\( -1/3+2-3 = -4/3 \\). Soustrait en base, on tire +4/3."
    },
    {
        id: 35,
        q1: "Trouver de façon ingénieuse formelle les primitives valides pour la fonction globale \\( \\tan(x) \\) sur l'extension locale de base, en exploitant prudemment l'astuce de restructuration :  \\( \\tan(x) = \\frac{\\sin(x)}{\\cos(x)} \\).",
        q2: "L'assertion basique Vrai ou Faux : Est ce que l'implication : « Si \\( \\int_{0}^{5} f(x)\\,dx > \\int_{0}^{5} g(x)\\,dx \\) prouve forcément de façon globale l'impact que  \\( f>g \\) partout ». Validerez-vous cette loi universelle absolue ?",
        correction: "<strong>Q1:</strong> Nous analysons et identifions que le schéma s'apparente directement à la forme standard des relations d'identification analytiques \\( u'/u \\) mais avec substitution de signe. On remarque posément le correctif \\( u'(x)=-\\sin(x) \\) ce qui justifie un traitement \\( -(-u'/u) \\). La primitive complète en ressort simplement comme étant : \\( -\\ln|\\cos x| \\).<br/><br/><strong>Q2:</strong> Résolument Faux pour l'usage et les propriétés standardisées des fonctions évaluables ! Le bilan ou capital sur l'ensemble du calcul total des aires nettes s'accumule sans tenir d'une contrainte ponctuelle locale. Un simple cas très particulier ou l'une forme un grand dôme sans jamais minorer la seconde universellement l'emporte avec aisance. "
    },
    {
        id: 36,
        q1: "Calculer méthodiquement la valeur finale pour \\( \\int_{0}^{1} e^{-x} \\, dx \\).",
        q2: "Expliquer d'une ligne d'argumentaire sans aucun calcul pour quelle cause théorique on trouve garanti que : \\( \\int_{1}^{2} \\ln(x) \\, dx \\leq \\int_{1}^{2} (x-1) \\, dx \\), sachant préalablement l'évidence absolue universelle classique  que la fonction respecte de base : \\( \\ln x \\leq x-1 \\).",
        correction: "<strong>Q1:</strong> Posons très naturellement et sans plus attendre de complexité la constante d'identification primitive sur la variable exposant :  \\( \\left[-e^{-x} \\right]_0^1 = -e^{-1} - (-e^0) = 1 - e^{-1} \\) soit \\( 1 - 1/e \\). La surface totale évaluée s'encadre sous tension. <br/><br/><strong>Q2:</strong> La raisonnement le plus classique justifié est l'invocation au célèbre Théorème de conservation ferme de l'Ordre en phase d'intégration orienté vers l'avant de bornes ordonnées (\\( 1 < 2 \\)). La position des lignes hiérarchisées préserve leur nature sur la balance d'aire générée globale de façon unilatérale."
    }
];
