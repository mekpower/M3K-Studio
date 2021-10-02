jQuery.ajax({
dataType: 'json',
url: 'https://api.gumroad.com/v2/products',
data: {
'access_token': 'yVdmZT1tpkzct3TCls8TlsufVYZJFuGe59ng5Vjk7jQ'
},

success: function(data){
console.log(data);
    $.each(data.products, function(index) {
            //alert(data[index].TEST1);
        var html;
        html = '<div class="gumroad-product">';
        html+= `<img class="thumb" src="${data.products[index].preview_url}"/>`;
        html+= '<div class="body"> <h5 class="d-xx-flex align-items-xxl-center" style="text-align: center;">';
        html+= data.products[index].name;
        html+= '</h5><a class="btn float-end" role="button" style="font-weight: bold;" href="';
        html+= `${data.products[index].short_url}">`;
        html+= data.products[index].formatted_price;
        html+= '</a></div></div>';
        
        $("#gumroad-sec").append(html);
    });
},
error: function(d){
console.log(d);
}
});

var affiliates = [
	'<a href="https://go.fiverr.com/visit/?bta=282176&nci=8506" rel="sponsored"  Target="_Top"><img border="0" src="https://fiverr.ck-cdn.com/tn/serve/?cid=13482629"  width="728" height="90"></a>',
	'<a href="https://go.fiverr.com/visit/?bta=282176&nci=8500" rel="sponsored"  Target="_Top"><img border="0" src="https://fiverr.ck-cdn.com/tn/serve/?cid=13482630"  width="728" height="90"></a>',
	'<a href="https://go.fiverr.com/visit/?bta=282176&nci=8723" rel="sponsored"  Target="_Top"><img border="0" src="https://fiverr.ck-cdn.com/tn/serve/?cid=13482649"  width="728" height="90"></a>', 
	'<a href="https://go.fiverr.com/visit/?bta=282176&nci=9324" rel="sponsored"  Target="_Top"><img border="0" src="https://fiverr.ck-cdn.com/tn/serve/?cid=13482657"  width="728" height="90"></a>', 
	'<a href="https://go.fiverr.com/visit/?bta=282176&nci=9324" rel="sponsored"  Target="_Top"><img border="0" src="https://fiverr.ck-cdn.com/tn/serve/?cid=13482657"  width="728" height="90"></a>'
];

var random = 0;

randomBanner();

function randomBanner() {
    var temp = random;
    // Make sure we do not display the same video twice in a row
    while(temp == random) temp = Math.floor(Math.random() * affiliates.length);
    random = temp;
	$('#fiverrAds').append(affiliates[random]);
}