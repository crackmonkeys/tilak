const list = document.getElementById("list");
const search = document.getElementById("search");

let products = [];
let filteredProducts = [];

function makeList(products) {
  list.innerHTML = ""; // Clear the list
  for (let i = 0; i < products.length; i++) {
    let item = document.createElement("li");
    item.addEventListener("click", function () {
      let opened = window.open("");
      opened.document.write(
        `<html><head><title>${products[i].name}</title></head><body> <div style='text-align: center;'><h1>${products[i].name}</h1> <img alt='Barcode Generator TEC-IT' src='https://barcode.tec-it.com/barcode.ashx?data=${products[i].plu}%0a&code=Code128&translate-esc=on'/></div><div style='padding-top:8px; text-align:center; font-size:15px; font-family: Source Sans Pro, Arial, sans-serif;'></a></div></body></html>`
      );
    });
    item.innerHTML = products[i].name;
    list.appendChild(item);
  }
}

function addProductNames(products) {
  for (let i = 0; i < products.length; i++) {
    productNames.push(products[i]);
  }
  makeList(products);
}


products =[  
{ name: 'PEARS BOSC/CORELLA[KG]' ,	 plu: '10014' }, 
{ name: 'BRUSSEL SPROUTS [KG]' ,	 plu: '10842' }, 
{ name: 'GOLDEN BEETROOT [KG]' ,	 plu: '10927' }, 
{ name: 'ROCKMELON 12 KG P/CTN [EACH]' ,	 plu: '11073' }, 
{ name: 'HONEYDEW 12.5 KG P/CTN [EACH]' ,	 plu: '11076' }, 
{ name: 'GRAPES WHITE [KG]' ,	 plu: '11604' }, 
{ name: 'KALE [EA]' ,	 plu: '11791' }, 
{ name: 'APPLES RED/PINK LADY [KG]' ,	 plu: '11794' }, 
{ name: 'APPLES GREEN 1' ,	 plu: '20519' }, 
{ name: 'AVOCADOS' ,	 plu: '20520' }, 
{ name: 'BANANAS [KG]' ,	 plu: '20521' }, 
{ name: 'BASIL [EA]' ,	 plu: '20522' }, 
{ name: 'BEANS ROUND T/T [KG]' ,	 plu: '20523' }, 
{ name: 'ALFALFA [EA]' ,	 plu: '20525' }, 
{ name: 'CAPSICUM RED 8KG P/CTN [KG]' ,	 plu: '20532' }, 
{ name: 'CHILLIES [KG]' ,	 plu: '20539' }, 
{ name: 'CHIVES BUNCH [EA]' ,	 plu: '20540' }, 
{ name: 'CORN COB FRESH [KG]' ,	 plu: '20543' }, 
{ name: 'CUCUMBERS TELEGRAPH/CONT [KG]' ,	 plu: '20544' }, 
{ name: 'CUCUMBER CUKES [PNT]' ,	 plu: '20545' }, 
{ name: 'CUCUMBER LEBANESE [KG]' ,	 plu: '20546' }, 
{ name: 'DILL BUNCH [EA]' ,	 plu: '20548' }, 
{ name: 'LEMONS 16KG P/CTN [KG]' ,	 plu: '20555' }, 
{ name: 'LETTUCE CORAL / OAK [KG]' ,	 plu: '20558' }, 
{ name: 'LETTUCE ICEBERG [EA]' ,	 plu: '20559' }, 
{ name: 'LETTUCE MESCULUN 3KG [CTN]' ,	 plu: '20562' }, 
{ name: 'LIMES 5 KG P/CTN [KG]' ,	 plu: '20563' }, 
{ name: 'MINT BUNCH [BUNCH]' ,	 plu: '20565' }, 
{ name: 'MUSHROOM BUTTON 4KG/CTN [KG]' ,	 plu: '20567' }, 
{ name: 'MUSHROOM OYSTER PUNNET 150G [EA]' ,	 plu: '20568' }, 
{ name: 'MUSHROOM ENOKI' ,	 plu: '20569' }, 
{ name: 'MUSHROOM SHITAKE [PNT]' ,	 plu: '20570' }, 
{ name: 'PARSLEY BUNCH [EA]' ,	 plu: '20576' }, 
{ name: 'POTATO CHAT/COCKTAIL [KG]' ,	 plu: '20581' }, 
{ name: 'SWEET POTATO [KG]' ,	 plu: '20583' }, 
{ name: 'POTATOES WASHED/ BRUSHED [KG]' ,	 plu: '20584' }, 
{ name: 'ROSEMARY BUNCH [EA]' ,	 plu: '20587' }, 
{ name: 'SNOW PEA SPROUTS PUNNET [EA]' ,	 plu: '20588' }, 
{ name: 'SPINACH BABY [KG]' ,	 plu: '20589' }, 
{ name: 'SQUASH YELLOW [KG]' ,	 plu: '20590' }, 
{ name: 'THYME BUNCH [EA]' ,	 plu: '20593' }, 
{ name: 'TOMATOES 10KG PER CTN [KG]' ,	 plu: '20595' }, 
{ name: 'CHERRY TOMATOES PUNNET [EA]' ,	 plu: '20596' }, 
{ name: 'WATERCRESS BUNCH [EA]' ,	 plu: '20603' }, 
{ name: 'MANGO KP [EA]' ,	 plu: '20608' }, 
{ name: 'ZUCCHINI [KG]' ,	 plu: '20609' }, 
{ name: 'BUTTERNUT PUMPKIN PORTIONED [KG]' ,	 plu: '20615' }, 
{ name: 'CARROTS SLICED/GRATED/ SHREDDED [KG]' ,	 plu: '20632' }, 
{ name: 'RED RADISH [BUNCH]' ,	 plu: '20678' }, 
{ name: 'EGGPLANT [KG]' ,	 plu: '20730' }, 
{ name: 'MUSHROOM SWISS BROWN PUNNET [EA]' ,	 plu: '21016' }, 
{ name: 'ASPARAGUS [BUNCH]' ,	 plu: '21419' }, 
{ name: 'LETTUCE BUTTER [EA]' ,	 plu: '21463' }, 
{ name: 'EGGPLANT JAPANESE [KG]' ,	 plu: '21784' }, 
{ name: 'CELERIAC [EA]' ,	 plu: '21785' }, 
{ name: 'CARROTS PEELED [KG]' ,	 plu: '22335' }, 
{ name: 'MUSHROOMS FLAT/FIELD 4KG/BOX [KG]' ,	 plu: '22336' }, 
{ name: 'LEEKS BUNCH [EA]' ,	 plu: '22338' }, 
{ name: 'LEMON GRASS [BUNCH]' ,	 plu: '22409' }, 
{ name: 'PUMPKIN DICED [KG]' ,	 plu: '22424' }, 
{ name: 'CABBAGE RED [EA]' ,	 plu: '22469' }, 
{ name: 'CABBAGE GREEN/WHITE [EA]' ,	 plu: '22561' }, 
{ name: 'LETTUCE RADICCHIO [EA]' ,	 plu: '22600' }, 
{ name: 'PUMPKIN PORTION SKIN ON [KG]' ,	 plu: '22606' }, 
{ name: 'BROCCOLINI [KG]' ,	 plu: '22720' }, 
{ name: 'ONION SPANISH PEELED [KG]' ,	 plu: '22735' }, 
{ name: 'CORIANDER BUNCH [EA]' ,	 plu: '22759' }, 
{ name: 'SWEET POTATO PEELED [KG]' ,	 plu: '22791' }, 
{ name: 'LETTUCE BABY COS 3.6KG PER CTN [KG]' ,	 plu: '22811' }, 
{ name: 'PINEAPPLE 13.3KG P/CTN [EACH]' ,	 plu: '22885' }, 
{ name: 'LETTUCE WILD ROCKET [KG]' ,	 plu: '23069' }, 
{ name: 'GARLIC WHOLE PEELED [KG]' ,	 plu: '23073' }, 
{ name: 'BEAN SPROUTS [KG]' ,	 plu: '23102' }, 
{ name: 'STRAWBERRY PUNNET [EA]' ,	 plu: '23200' }, 
{ name: 'POTATO KIPFLER WASHED [KG]' ,	 plu: '23201' }, 
{ name: 'SHALLOTS BUNCH [EA]' ,	 plu: '23204' }, 
{ name: 'BOK CHOY [EA]' ,	 plu: '23292' }, 
{ name: 'PAPAYA - GREEN [KG]' ,	 plu: '23294' }, 
{ name: 'MICRO MIXED HERBS PNT [EA]' ,	 plu: '23385' }, 
{ name: 'WATERMELON [KG]' ,	 plu: '23389' }, 
{ name: 'PUMPKIN PEELED PORTIONED [KG]' ,	 plu: '23428' }, 
{ name: 'SNOW PEA TENDRILS/LEAF [KG]' ,	 plu: '23492' }, 
{ name: 'ESCHALLOTS PEELED [KG]' ,	 plu: '23501' }, 
{ name: 'ONION BROWN/RED DICED / SLICED [KG]' ,	 plu: '23544' }, 
{ name: 'RASPBERRIES PUNNET [EA]' ,	 plu: '23642' }, 
{ name: 'BLUEBERRIES PUNNET [EA]' ,	 plu: '23643' }, 
{ name: 'CAPSICUM GREEN 8KG P/CTN [KG]' ,	 plu: '23824' }, 
{ name: 'KIWI FRUIT [KG]' ,	 plu: '23841' }, 
{ name: 'GRAPES RED [KG]' ,	 plu: '23888' }, 
{ name: 'CELERY BUNCH [EA]' ,	 plu: '23951' }, 
{ name: 'CAULIFLOWER HEAD [EA]' ,	 plu: '24013' }, 
{ name: 'ONION BROWN' ,	 plu: '24025' }, 
{ name: 'GINGER FRESH [KG]' ,	 plu: '24035' }, 
{ name: 'TARRAGON BUNCH [EA]' ,	 plu: '24036' }, 
{ name: 'FENNEL [EA]' ,	 plu: '24052' }, 
{ name: 'POMEGRANATE [EA]' ,	 plu: '24117' }, 
{ name: 'SAGE BUNCH [EA]' ,	 plu: '24221' }, 
{ name: 'SWEDES [KG]' ,	 plu: '24400' }, 
{ name: 'PUMPKIN BUTTERNUT/JAP [KG]' ,	 plu: '24674' }, 
{ name: 'CARROT HEIRLOOM/DUTCH [KG]' ,	 plu: '24689' }, 
{ name: 'THAI BASIL [EA]' ,	 plu: '24692' }, 
{ name: 'MIREPOIX VEG MIX CARROTS/ONION/CELERY [KG]' ,	 plu: '24827' }, 
{ name: 'ORANGES 14KG P/CTN [KG]' ,	 plu: '24879' }, 
{ name: 'TOMATO HEIRLOOM [KG]' ,	 plu: '24935' }, 
{ name: 'DRYSLAW RED/CAB/CAR/PARS [KG]' ,	 plu: '26005' }, 
{ name: 'EDIBLE FLOWER PUNNET [EA]' ,	 plu: '26028' }, 
{ name: 'BEETROOT [KG]' ,	 plu: '26038' }, 
{ name: 'EGGPLANT BABY [KG]' ,	 plu: '26039' }, 
{ name: 'BROCCOLI FLORETS 5KG PER BAG [KG]' ,	 plu: '26064' }, 
{ name: 'CARROTS BATONS [KG]' ,	 plu: '26068' }, 
{ name: 'CAULIFLOWER FLORETS 5KG [KG]' ,	 plu: '26070' }, 
{ name: 'MUSHROOM KING BROWN [KG]' ,	 plu: '26080' }, 
{ name: 'MUSHROOM B GRADE 4KG/BX [KG]' ,	 plu: '26084' }, 
{ name: 'POTATO DICED / SLICED [KG]' ,	 plu: '26114' }, 
{ name: 'SWEET POTATO DICED [KG]' ,	 plu: '26115' }, 
{ name: 'PEACH [KG]' ,	 plu: '26119' }, 
{ name: 'RADISH WATERMELON [BUNCH]' ,	 plu: '26122' }, 
{ name: 'POTATO PEELED [KG]' ,	 plu: '26125' }, 
{ name: 'BUTTERNUT PUMPKIN PEELED PORTIONED [KG]' ,	 plu: '26128' }, 
{ name: 'RANDOM CHEF PRODUCTS RWC [??]' ,	 plu: '26133' }, 
{ name: 'CHILLI JALAPENO GREEN [KG]' ,	 plu: '26139' }, 
{ name: 'RHUBARB BUNCH [EA]' ,	 plu: '26140' }, 
{ name: 'TRUSS TOMATOES CHERRY [PUNNET]' ,	 plu: '26201' }, 
{ name: 'CHESTNUTS FRESH [KG]' ,	 plu: '26206' }, 
{ name: 'LIME KAFFIR LEAVES [KG]' ,	 plu: '26212' }, 
{ name: 'FIGS [EA]' ,	 plu: '26235' }, 
{ name: 'ZUCCHINI FLOWER [PUNNET]' ,	 plu: '26248' }, 
{ name: 'CHERRIES RED [KG]' ,	 plu: '26259' }, 
{ name: 'LETTUCE ASSORTED SUBSTITUTES [KG]' ,	 plu: '26267' }, 
{ name: 'PASSIONFRUIT [KG]' ,	 plu: '26271' }, 
{ name: 'CARROTS UNPEELED [KG]' ,	 plu: '26280' }, 
{ name: 'PINEAPPLE DICED' ,	 plu: '26285' }, 
{ name: 'ROCKMELON DICED' ,	 plu: '26286' }, 
{ name: 'VEGETABLE SOUP MIX [KG]' ,	 plu: '26287' }, 
{ name: 'WATERMELON DICED' ,	 plu: '26288' }, 
{ name: 'NECTARINE [KG]' ,	 plu: '26294' }, 
{ name: 'PLUM BLOOD [KG]' ,	 plu: '26297' }, 
{ name: 'GRAPEFRUIT [KG]' ,	 plu: '26299' }, 
{ name: 'BROCCOLI WHOLE [KG]' ,	 plu: '26302' }, 
{ name: 'MANDARIN [KG]' ,	 plu: '26304' }, 
{ name: 'DRAGON FRUIT [EA]' ,	 plu: '26307' }, 
{ name: 'OREGANO FRESH BUNCH [EA]' ,	 plu: '26341' }, 
{ name: 'SORREL GREEN BUNCH [EA]' ,	 plu: '26364' }, 
{ name: 'CAPSICUM YELLOW [KG]' ,	 plu: '26379' }, 
{ name: 'CAPSICUM BABY MIXED [PUNNET]' ,	 plu: '26440' }, 
{ name: 'PARSNIP [KG]' ,	 plu: '26446' }, 
{ name: 'HONEYDEW DICED' ,	 plu: '26547' }, 
{ name: 'MUSHROOM SHIMEJI KOREAN [PUNNET]' ,	 plu: '26548' }, 
{ name: 'CABBAGE - RED SHREDDED [KG]' ,	 plu: '26549' }, 
{ name: 'CHIVES GARLIC BUNCH [EA]' ,	 plu: '26551' }, 
{ name: 'DAIKON RADISH [KG]' ,	 plu: '26552' }, 
{ name: 'MICRO CHERVIL BUNCH [EA]' ,	 plu: '26553' }, 
{ name: 'POTATO DESIREE [KG]' ,	 plu: '26554' }, 
{ name: 'STIR FRY VEG [KG]' ,	 plu: '26555' }, 
{ name: 'MUSHROOM KING BROWN BABY BAG 300G [EA]' ,	 plu: '26578' }, 
{ name: 'MANGO YELLOW [KG]' ,	 plu: '26624' }, 
{ name: 'MUSHROOM BUTTON SLICED [KG]' ,	 plu: '30296' }, 
{ name: 'SPANISH/RED ONIONS UNPEELED [KG]' ,	 plu: '30297' },  
];
let productNames = []; 
addProductNames(products);
makeList(productNames);
console.log(productNames);

function narrowDownList(products, characters) {
  const narrowedDownList = [];
  for (const product of products) {
    if (product.name.toUpperCase().includes(characters.toUpperCase())) {
      narrowedDownList.push(product);
    }
  }
  return narrowedDownList;
}

search.addEventListener("input", (event) => {
  const characters = event.target.value;
  let narrowedDownList = narrowDownList(products, characters);
  makeList(narrowedDownList);
});
