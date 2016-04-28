var init_stock_lookup;

init_stock_lookup = function() {
	$('#stock-lookup-form').on('ajaz:success', function(event, data, status){
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	})
}

$(document).ready(fundtion() {
	init_stock_lookup();
})