const data = [
  {
    name: 'LOMA',
    seller: 'venum',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/venum.svg_o2hcyc.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/venum_loma_sjpvcc.png',
    price: 320,
    size: 8,
    link: 'https://euro.venum.com/es/venum-x-realtree-loma-official-boxing-gloves-october-2022.html'
  },
  {
    name: 'RAJADAMNERN',
    seller: 'venum',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/venum.svg_o2hcyc.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/venum_RAJADAMNERN_iuzn72.png',
    price: 100,
    size: 12,
    link: 'https://euro.venum.com/es/rajadamnern-x-venum-boxing-gloves-navy-blue.html'
  },
  {
    name: 'NAVY',
    seller: 'venum',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/venum.svg_o2hcyc.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/venum_navy_fnu7as.png',
    price: 90,
    size: 12,
    link: 'https://euro.venum.com/es/guantes-de-boxeo-venum-elite-blanco-azul-marino.html'
  },
  {
    name: 'DRAGON',
    seller: 'venum',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/venum.svg_o2hcyc.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605855/ceres-box/venum_dragon_juvmfs.png',
    price: 90,
    size: 12,
    link: 'https://euro.venum.com/es/catalog/product/view/id/85305/'
  },
  {
    name: '1910',
    seller: 'everlast',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/everlast_ahtmaz.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605854/ceres-box/everlast_1910_yfte09.png',
    price: 200,
    size: 10,
    link: 'https://www.everlast.com/1910-classic-fight-gloves?refSrc=23776&nosto=nosto-page-product2&color=1065'
  },
  {
    name: 'ELITE',
    seller: 'everlast',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/everlast_ahtmaz.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605854/ceres-box/everlast_elite_qnmggz.png',
    price: 150,
    size: 8,
    link: 'https://www.everlast.com/fight/boxing/gloves/competition-gloves/elite-pro-fight-gloves'
  },
  {
    name: 'POWERLOCK 2',
    seller: 'everlast',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/everlast_ahtmaz.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/everlast_powerlock2_yntwoj.png',
    price: 100,
    size: 16,
    link: 'https://www.everlast.com/fight/boxing/gloves/training-gloves/powerlock2-pro-hook-loop-training-gloves?size=171'
  },
  {
    name: 'TITAN',
    seller: 'everlast',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/everlast_ahtmaz.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605857/ceres-box/everlast_titan_bth3ue.png',
    price: 40,
    size: 10,
    link: 'https://www.everlast.com/fight/boxing/gloves/competition-gloves/titan-hybrid-glove?size=159'
  },
  {
    name: 'REVO PERFORMANCE',
    seller: 'leone',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_cswxr4.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605857/ceres-box/leone_revoPerformance_iis7hf.png',
    price: 140,
    size: 14,
    link: 'https://leone1947.es/producto/guantes-de-boxeo-leone-revo-performance-color-blanco-gn110/'
  },
  {
    name: 'AUTHENTIC',
    seller: 'leone',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_cswxr4.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_authentic_iuybce.png',
    price: 110,
    size: 12,
    link: 'https://leone1947.es/producto/gn116l-guantes-de-boxeo-leone-1947-authentic-2-blanco/'
  },
  {
    name: 'LEGIONARIUS',
    seller: 'leone',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_cswxr4.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_legionarivs_rql4kp.png',
    price: 70,
    size: 10,
    link: 'https://leone1947.es/producto/gn202-guantes-de-boxeo-leone-legionarivs-by-alessio-sakara/'
  },
  {
    name: 'MILITAR',
    seller: 'leone',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_cswxr4.png',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1677605856/ceres-box/leone_militar_rmhgol.png',
    price: 50,
    size: 10,
    link: 'https://leone1947.es/producto/gn059c-guantes-de-boxeo-leone-1947-verde-militar/'
  },
  {
    name: 'PREMIUM',
    seller: 'buddha',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678545643/ceres-box/buddha_logo_ysrcz5.svg',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678545743/ceres-box/premium_u4vvir.webp',
    price: 37,
    size: 16,
    link: 'https://www.buddhafightwear.com/collections/guantes-top-premium-mate-34-90/products/guantes-de-boxeo-muay-thai-kick-boxing-top-premium-negros-mate'
  },
  {
    name: 'EPIC',
    seller: 'buddha',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678545643/ceres-box/buddha_logo_ysrcz5.svg',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678623345/ceres-box/epic_etjpfw.webp',
    price: 65,
    size: 14,
    link: 'https://www.buddhafightwear.com/collections/guantes/products/guantes-de-boxeo-muay-thai-kick-boxing-epic-blancos-piel'
  },
  {
    name: 'LEGEND',
    seller: 'buddha',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678545643/ceres-box/buddha_logo_ysrcz5.svg',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678623346/ceres-box/legend_d0wh1j.webp',
    price: 65,
    size: 14,
    link: 'https://www.buddhafightwear.com/collections/guantes-premium-piel/products/copia-de-guantes-de-boxeo-muay-thai-kick-boxing-legend-negro-roto-piel'
  },
  {
    name: 'TOP FIGHT',
    seller: 'buddha',
    sellerImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678545643/ceres-box/buddha_logo_ysrcz5.svg',
    productImg:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1678623345/ceres-box/top_fight_ru4dnx.webp',
    price: 34,
    size: 12,
    link: 'https://www.buddhafightwear.com/collections/guantes-top-fight-series-33-90/products/guantes-de-boxeo-muay-thai-kick-boxing-top-fight-negro-oros'
  }
];

export default data;
