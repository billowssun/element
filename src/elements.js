/* 配置逻辑：
   - row: 1-7 (主表)
   - row: 9 (镧系)
   - row: 10 (锕系)
   - col: 1-18
*/

export const categoryColors = {
    "alkali-metal": "var(--c-alkali)",
    "alkaline-earth-metal": "var(--c-alkaline)",
    "transition-metal": "var(--c-transition)",
    "post-transition-metal": "var(--c-post-trans)",
    "metalloid": "var(--c-metalloid)",
    "nonmetal": "var(--c-nonmetal)", // 一般非金属
    "halogen": "var(--c-halogen)",
    "noble-gas": "var(--c-noble)",
    "lanthanide": "var(--c-lanthanide)",
    "actinide": "var(--c-actinide)",
    "unknown": "var(--c-unknown)"
};

export const categoryNames = {
    "alkali-metal": "碱金属",
    "alkaline-earth-metal": "碱土金属",
    "transition-metal": "过渡金属",
    "post-transition-metal": "贫金属",
    "metalloid": "类金属",
    "nonmetal": "非金属",
    "halogen": "卤素",
    "noble-gas": "稀有气体",
    "lanthanide": "镧系元素",
    "actinide": "锕系元素",
    "unknown": "性质未定"
};

// --- 完整的 118 元素数据 ---
export const elements = [
    // Period 1
    {n:1, s:"H",  nm:"氢", en:"Hydrogen", m:"1.008", c:1, r:1, cat:"nonmetal", el:"1s¹"},
    {n:2, s:"He", nm:"氦", en:"Helium", m:"4.0026", c:18, r:1, cat:"noble-gas", el:"1s²"},
    
    // Period 2
    {n:3, s:"Li", nm:"锂", en:"Lithium", m:"6.94", c:1, r:2, cat:"alkali-metal", el:"[He] 2s¹"},
    {n:4, s:"Be", nm:"铍", en:"Beryllium", m:"9.0122", c:2, r:2, cat:"alkaline-earth-metal", el:"[He] 2s²"},
    {n:5, s:"B",  nm:"硼", en:"Boron", m:"10.81", c:13, r:2, cat:"metalloid", el:"[He] 2s² 2p¹"},
    {n:6, s:"C",  nm:"碳", en:"Carbon", m:"12.011", c:14, r:2, cat:"nonmetal", el:"[He] 2s² 2p²"},
    {n:7, s:"N",  nm:"氮", en:"Nitrogen", m:"14.007", c:15, r:2, cat:"nonmetal", el:"[He] 2s² 2p³"},
    {n:8, s:"O",  nm:"氧", en:"Oxygen", m:"15.999", c:16, r:2, cat:"nonmetal", el:"[He] 2s² 2p⁴"},
    {n:9, s:"F",  nm:"氟", en:"Fluorine", m:"18.998", c:17, r:2, cat:"halogen", el:"[He] 2s² 2p⁵"},
    {n:10, s:"Ne", nm:"氖", en:"Neon", m:"20.180", c:18, r:2, cat:"noble-gas", el:"[He] 2s² 2p⁶"},

    // Period 3
    {n:11, s:"Na", nm:"钠", en:"Sodium", m:"22.990", c:1, r:3, cat:"alkali-metal", el:"[Ne] 3s¹"},
    {n:12, s:"Mg", nm:"镁", en:"Magnesium", m:"24.305", c:2, r:3, cat:"alkaline-earth-metal", el:"[Ne] 3s²"},
    {n:13, s:"Al", nm:"铝", en:"Aluminium", m:"26.982", c:13, r:3, cat:"post-transition-metal", el:"[Ne] 3s² 3p¹"},
    {n:14, s:"Si", nm:"硅", en:"Silicon", m:"28.085", c:14, r:3, cat:"metalloid", el:"[Ne] 3s² 3p²"},
    {n:15, s:"P",  nm:"磷", en:"Phosphorus", m:"30.974", c:15, r:3, cat:"nonmetal", el:"[Ne] 3s² 3p³"},
    {n:16, s:"S",  nm:"硫", en:"Sulfur", m:"32.06", c:16, r:3, cat:"nonmetal", el:"[Ne] 3s² 3p⁴"},
    {n:17, s:"Cl", nm:"氯", en:"Chlorine", m:"35.45", c:17, r:3, cat:"halogen", el:"[Ne] 3s² 3p⁵"},
    {n:18, s:"Ar", nm:"氩", en:"Argon", m:"39.948", c:18, r:3, cat:"noble-gas", el:"[Ne] 3s² 3p⁶"},

    // Period 4
    {n:19, s:"K",  nm:"钾", en:"Potassium", m:"39.098", c:1, r:4, cat:"alkali-metal", el:"[Ar] 4s¹"},
    {n:20, s:"Ca", nm:"钙", en:"Calcium", m:"40.078", c:2, r:4, cat:"alkaline-earth-metal", el:"[Ar] 4s²"},
    {n:21, s:"Sc", nm:"钪", en:"Scandium", m:"44.956", c:3, r:4, cat:"transition-metal", el:"[Ar] 3d¹ 4s²"},
    {n:22, s:"Ti", nm:"钛", en:"Titanium", m:"47.867", c:4, r:4, cat:"transition-metal", el:"[Ar] 3d² 4s²"},
    {n:23, s:"V",  nm:"钒", en:"Vanadium", m:"50.942", c:5, r:4, cat:"transition-metal", el:"[Ar] 3d³ 4s²"},
    {n:24, s:"Cr", nm:"铬", en:"Chromium", m:"51.996", c:6, r:4, cat:"transition-metal", el:"[Ar] 3d⁵ 4s¹"},
    {n:25, s:"Mn", nm:"锰", en:"Manganese", m:"54.938", c:7, r:4, cat:"transition-metal", el:"[Ar] 3d⁵ 4s²"},
    {n:26, s:"Fe", nm:"铁", en:"Iron", m:"55.845", c:8, r:4, cat:"transition-metal", el:"[Ar] 3d⁶ 4s²"},
    {n:27, s:"Co", nm:"钴", en:"Cobalt", m:"58.933", c:9, r:4, cat:"transition-metal", el:"[Ar] 3d⁷ 4s²"},
    {n:28, s:"Ni", nm:"镍", en:"Nickel", m:"58.693", c:10, r:4, cat:"transition-metal", el:"[Ar] 3d⁸ 4s²"},
    {n:29, s:"Cu", nm:"铜", en:"Copper", m:"63.546", c:11, r:4, cat:"transition-metal", el:"[Ar] 3d¹⁰ 4s¹"},
    {n:30, s:"Zn", nm:"锌", en:"Zinc", m:"65.38", c:12, r:4, cat:"transition-metal", el:"[Ar] 3d¹⁰ 4s²"},
    {n:31, s:"Ga", nm:"镓", en:"Gallium", m:"69.723", c:13, r:4, cat:"post-transition-metal", el:"[Ar] 3d¹⁰ 4s² 4p¹"},
    {n:32, s:"Ge", nm:"锗", en:"Germanium", m:"72.630", c:14, r:4, cat:"metalloid", el:"[Ar] 3d¹⁰ 4s² 4p²"},
    {n:33, s:"As", nm:"砷", en:"Arsenic", m:"74.922", c:15, r:4, cat:"metalloid", el:"[Ar] 3d¹⁰ 4s² 4p³"},
    {n:34, s:"Se", nm:"硒", en:"Selenium", m:"78.971", c:16, r:4, cat:"nonmetal", el:"[Ar] 3d¹⁰ 4s² 4p⁴"},
    {n:35, s:"Br", nm:"溴", en:"Bromine", m:"79.904", c:17, r:4, cat:"halogen", el:"[Ar] 3d¹⁰ 4s² 4p⁵"},
    {n:36, s:"Kr", nm:"氪", en:"Krypton", m:"83.798", c:18, r:4, cat:"noble-gas", el:"[Ar] 3d¹⁰ 4s² 4p⁶"},

    // Period 5
    {n:37, s:"Rb", nm:"铷", en:"Rubidium", m:"85.468", c:1, r:5, cat:"alkali-metal", el:"[Kr] 5s¹"},
    {n:38, s:"Sr", nm:"锶", en:"Strontium", m:"87.62", c:2, r:5, cat:"alkaline-earth-metal", el:"[Kr] 5s²"},
    {n:39, s:"Y",  nm:"钇", en:"Yttrium", m:"88.906", c:3, r:5, cat:"transition-metal", el:"[Kr] 4d¹ 5s²"},
    {n:40, s:"Zr", nm:"锆", en:"Zirconium", m:"91.224", c:4, r:5, cat:"transition-metal", el:"[Kr] 4d² 5s²"},
    {n:41, s:"Nb", nm:"铌", en:"Niobium", m:"92.906", c:5, r:5, cat:"transition-metal", el:"[Kr] 4d⁴ 5s¹"},
    {n:42, s:"Mo", nm:"钼", en:"Molybdenum", m:"95.95", c:6, r:5, cat:"transition-metal", el:"[Kr] 4d⁵ 5s¹"},
    {n:43, s:"Tc", nm:"锝", en:"Technetium", m:"(98)", c:7, r:5, cat:"transition-metal", el:"[Kr] 4d⁵ 5s²"},
    {n:44, s:"Ru", nm:"钌", en:"Ruthenium", m:"101.07", c:8, r:5, cat:"transition-metal", el:"[Kr] 4d⁷ 5s¹"},
    {n:45, s:"Rh", nm:"铑", en:"Rhodium", m:"102.91", c:9, r:5, cat:"transition-metal", el:"[Kr] 4d⁸ 5s¹"},
    {n:46, s:"Pd", nm:"钯", en:"Palladium", m:"106.42", c:10, r:5, cat:"transition-metal", el:"[Kr] 4d¹⁰"},
    {n:47, s:"Ag", nm:"银", en:"Silver", m:"107.87", c:11, r:5, cat:"transition-metal", el:"[Kr] 4d¹⁰ 5s¹"},
    {n:48, s:"Cd", nm:"镉", en:"Cadmium", m:"112.41", c:12, r:5, cat:"transition-metal", el:"[Kr] 4d¹⁰ 5s²"},
    {n:49, s:"In", nm:"铟", en:"Indium", m:"114.82", c:13, r:5, cat:"post-transition-metal", el:"[Kr] 4d¹⁰ 5s² 5p¹"},
    {n:50, s:"Sn", nm:"锡", en:"Tin", m:"118.71", c:14, r:5, cat:"post-transition-metal", el:"[Kr] 4d¹⁰ 5s² 5p²"},
    {n:51, s:"Sb", nm:"锑", en:"Antimony", m:"121.76", c:15, r:5, cat:"metalloid", el:"[Kr] 4d¹⁰ 5s² 5p³"},
    {n:52, s:"Te", nm:"碲", en:"Tellurium", m:"127.60", c:16, r:5, cat:"metalloid", el:"[Kr] 4d¹⁰ 5s² 5p⁴"},
    {n:53, s:"I",  nm:"碘", en:"Iodine", m:"126.90", c:17, r:5, cat:"halogen", el:"[Kr] 4d¹⁰ 5s² 5p⁵"},
    {n:54, s:"Xe", nm:"氙", en:"Xenon", m:"131.29", c:18, r:5, cat:"noble-gas", el:"[Kr] 4d¹⁰ 5s² 5p⁶"},

    // Period 6
    {n:55, s:"Cs", nm:"铯", en:"Cesium", m:"132.91", c:1, r:6, cat:"alkali-metal", el:"[Xe] 6s¹"},
    {n:56, s:"Ba", nm:"钡", en:"Barium", m:"137.33", c:2, r:6, cat:"alkaline-earth-metal", el:"[Xe] 6s²"},
    // Lanthanides (Row 9) - 从57到71
    {n:57, s:"La", nm:"镧", en:"Lanthanum", m:"138.91", c:4, r:9, cat:"lanthanide", el:"[Xe] 5d¹ 6s²"}, // Note: Displayed in separate block
    {n:58, s:"Ce", nm:"铈", en:"Cerium", m:"140.12", c:5, r:9, cat:"lanthanide", el:"[Xe] 4f¹ 5d¹ 6s²"},
    {n:59, s:"Pr", nm:"镨", en:"Praseodymium", m:"140.91", c:6, r:9, cat:"lanthanide", el:"[Xe] 4f³ 6s²"},
    {n:60, s:"Nd", nm:"钕", en:"Neodymium", m:"144.24", c:7, r:9, cat:"lanthanide", el:"[Xe] 4f⁴ 6s²"},
    {n:61, s:"Pm", nm:"钷", en:"Promethium", m:"(145)", c:8, r:9, cat:"lanthanide", el:"[Xe] 4f⁵ 6s²"},
    {n:62, s:"Sm", nm:"钐", en:"Samarium", m:"150.36", c:9, r:9, cat:"lanthanide", el:"[Xe] 4f⁶ 6s²"},
    {n:63, s:"Eu", nm:"铕", en:"Europium", m:"151.96", c:10, r:9, cat:"lanthanide", el:"[Xe] 4f⁷ 6s²"},
    {n:64, s:"Gd", nm:"钆", en:"Gadolinium", m:"157.25", c:11, r:9, cat:"lanthanide", el:"[Xe] 4f⁷ 5d¹ 6s²"},
    {n:65, s:"Tb", nm:"铽", en:"Terbium", m:"158.93", c:12, r:9, cat:"lanthanide", el:"[Xe] 4f⁹ 6s²"},
    {n:66, s:"Dy", nm:"镝", en:"Dysprosium", m:"162.50", c:13, r:9, cat:"lanthanide", el:"[Xe] 4f¹⁰ 6s²"},
    {n:67, s:"Ho", nm:"钬", en:"Holmium", m:"164.93", c:14, r:9, cat:"lanthanide", el:"[Xe] 4f¹¹ 6s²"},
    {n:68, s:"Er", nm:"铒", en:"Erbium", m:"167.26", c:15, r:9, cat:"lanthanide", el:"[Xe] 4f¹² 6s²"},
    {n:69, s:"Tm", nm:"铥", en:"Thulium", m:"168.93", c:16, r:9, cat:"lanthanide", el:"[Xe] 4f¹³ 6s²"},
    {n:70, s:"Yb", nm:"镱", en:"Ytterbium", m:"173.05", c:17, r:9, cat:"lanthanide", el:"[Xe] 4f¹⁴ 6s²"},
    {n:71, s:"Lu", nm:"镥", en:"Lutetium", m:"174.97", c:18, r:9, cat:"lanthanide", el:"[Xe] 4f¹⁴ 5d¹ 6s²"},

    // Period 6 continued
    {n:72, s:"Hf", nm:"铪", en:"Hafnium", m:"178.49", c:4, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d² 6s²"},
    {n:73, s:"Ta", nm:"钽", en:"Tantalum", m:"180.95", c:5, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d³ 6s²"},
    {n:74, s:"W",  nm:"钨", en:"Tungsten", m:"183.84", c:6, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d⁴ 6s²"},
    {n:75, s:"Re", nm:"铼", en:"Rhenium", m:"186.21", c:7, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d⁵ 6s²"},
    {n:76, s:"Os", nm:"锇", en:"Osmium", m:"190.23", c:8, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d⁶ 6s²"},
    {n:77, s:"Ir", nm:"铱", en:"Iridium", m:"192.22", c:9, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d⁷ 6s²"},
    {n:78, s:"Pt", nm:"铂", en:"Platinum", m:"195.08", c:10, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d⁹ 6s¹"},
    {n:79, s:"Au", nm:"金", en:"Gold", m:"196.97", c:11, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹"},
    {n:80, s:"Hg", nm:"汞", en:"Mercury", m:"200.59", c:12, r:6, cat:"transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s²"},
    {n:81, s:"Tl", nm:"铊", en:"Thallium", m:"204.38", c:13, r:6, cat:"post-transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹"},
    {n:82, s:"Pb", nm:"铅", en:"Lead", m:"207.2", c:14, r:6, cat:"post-transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²"},
    {n:83, s:"Bi", nm:"铋", en:"Bismuth", m:"208.98", c:15, r:6, cat:"post-transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³"},
    {n:84, s:"Po", nm:"钋", en:"Polonium", m:"(209)", c:16, r:6, cat:"post-transition-metal", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴"},
    {n:85, s:"At", nm:"砹", en:"Astatine", m:"(210)", c:17, r:6, cat:"halogen", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵"},
    {n:86, s:"Rn", nm:"氡", en:"Radon", m:"(222)", c:18, r:6, cat:"noble-gas", el:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"},

    // Period 7
    {n:87, s:"Fr", nm:"钫", en:"Francium", m:"(223)", c:1, r:7, cat:"alkali-metal", el:"[Rn] 7s¹"},
    {n:88, s:"Ra", nm:"镭", en:"Radium", m:"(226)", c:2, r:7, cat:"alkaline-earth-metal", el:"[Rn] 7s²"},
    // Actinides (Row 10) - 从89到103
    {n:89, s:"Ac", nm:"锕", en:"Actinium", m:"(227)", c:4, r:10, cat:"actinide", el:"[Rn] 6d¹ 7s²"},
    {n:90, s:"Th", nm:"钍", en:"Thorium", m:"232.04", c:5, r:10, cat:"actinide", el:"[Rn] 6d² 7s²"},
    {n:91, s:"Pa", nm:"镤", en:"Protactinium", m:"231.04", c:6, r:10, cat:"actinide", el:"[Rn] 5f² 6d¹ 7s²"},
    {n:92, s:"U",  nm:"铀", en:"Uranium", m:"238.03", c:7, r:10, cat:"actinide", el:"[Rn] 5f³ 6d¹ 7s²"},
    {n:93, s:"Np", nm:"镎", en:"Neptunium", m:"(237)", c:8, r:10, cat:"actinide", el:"[Rn] 5f⁴ 6d¹ 7s²"},
    {n:94, s:"Pu", nm:"钚", en:"Plutonium", m:"(244)", c:9, r:10, cat:"actinide", el:"[Rn] 5f⁶ 7s²"},
    {n:95, s:"Am", nm:"镅", en:"Americium", m:"(243)", c:10, r:10, cat:"actinide", el:"[Rn] 5f⁷ 7s²"},
    {n:96, s:"Cm", nm:"锔", en:"Curium", m:"(247)", c:11, r:10, cat:"actinide", el:"[Rn] 5f⁷ 6d¹ 7s²"},
    {n:97, s:"Bk", nm:"锫", en:"Berkelium", m:"(247)", c:12, r:10, cat:"actinide", el:"[Rn] 5f⁹ 7s²"},
    {n:98, s:"Cf", nm:"锎", en:"Californium", m:"(251)", c:13, r:10, cat:"actinide", el:"[Rn] 5f¹⁰ 7s²"},
    {n:99, s:"Es", nm:"锿", en:"Einsteinium", m:"(252)", c:14, r:10, cat:"actinide", el:"[Rn] 5f¹¹ 7s²"},
    {n:100,s:"Fm", nm:"镄", en:"Fermium", m:"(257)", c:15, r:10, cat:"actinide", el:"[Rn] 5f¹² 7s²"},
    {n:101,s:"Md", nm:"钔", en:"Mendelevium", m:"(258)", c:16, r:10, cat:"actinide", el:"[Rn] 5f¹³ 7s²"},
    {n:102,s:"No", nm:"锘", en:"Nobelium", m:"(259)", c:17, r:10, cat:"actinide", el:"[Rn] 5f¹⁴ 7s²"},
    {n:103,s:"Lr", nm:"铹", en:"Lawrencium", m:"(266)", c:18, r:10, cat:"actinide", el:"[Rn] 5f¹⁴ 7s² 7p¹"},

    // Period 7 continued
    {n:104,s:"Rf", nm:"𬬻", en:"Rutherfordium", m:"(267)", c:4, r:7, cat:"transition-metal", el:"[Rn] 5f¹⁴ 6d² 7s²"},
    {n:105,s:"Db", nm:"𬭊", en:"Dubnium", m:"(268)", c:5, r:7, cat:"transition-metal", el:"[Rn] 5f¹⁴ 6d³ 7s²"},
    {n:106,s:"Sg", nm:"𬭳", en:"Seaborgium", m:"(269)", c:6, r:7, cat:"transition-metal", el:"[Rn] 5f¹⁴ 6d⁴ 7s²"},
    {n:107,s:"Bh", nm:"𬭛", en:"Bohrium", m:"(270)", c:7, r:7, cat:"transition-metal", el:"[Rn] 5f¹⁴ 6d⁵ 7s²"},
    {n:108,s:"Hs", nm:"𬭶", en:"Hassium", m:"(269)", c:8, r:7, cat:"transition-metal", el:"[Rn] 5f¹⁴ 6d⁶ 7s²"},
    {n:109,s:"Mt", nm:"⛷", en:"Meitnerium", m:"(278)", c:9, r:7, cat:"unknown", el:"?"},
    {n:110,s:"Ds", nm:"𫟼", en:"Darmstadtium", m:"(281)", c:10, r:7, cat:"unknown", el:"?"},
    {n:111,s:"Rg", nm:"𬬭", en:"Roentgenium", m:"(282)", c:11, r:7, cat:"unknown", el:"?"},
    {n:112,s:"Cn", nm:"\u{2B7A9}", en:"Copernicium", m:"(285)", c:12, r:7, cat:"post-transition-metal", el:"[Rn] 5f¹⁴ 6d¹⁰ 7s²"},
    {n:113,s:"Nh", nm:"\u{948E}", en:"Nihonium", m:"(286)", c:13, r:7, cat:"unknown", el:"?"},
    {n:114,s:"Fl", nm:"\u{948D}", en:"Flerovium", m:"(289)", c:14, r:7, cat:"post-transition-metal", el:"?"},
    {n:115,s:"Mc", nm:"\u{948F}", en:"Moscovium", m:"(290)", c:15, r:7, cat:"unknown", el:"?"},
    {n:116,s:"Lv", nm:"\u{9490}", en:"Livermorium", m:"(293)", c:16, r:7, cat:"unknown", el:"?"},
    {n:117,s:"Ts", nm:"\u{9491}", en:"Tennessine", m:"(294)", c:17, r:7, cat:"unknown", el:"?"},
    {n:118,s:"Og", nm:"\u{9492}", en:"Oganesson", m:"(294)", c:18, r:7, cat:"unknown", el:"?"}
];

// 特殊汉字处理 (部分超重元素汉字可能需要字体支持，此处使用Unicode转义或近似)
// 112号元素 Cn: 鿔 (U+9FC4) 但在部分字体中不显示，这里用了代替字符，
// 你可以根据需要替换为标准汉字 "鿔", "鉨", "镆", "鉝", "石田", "气奥"
