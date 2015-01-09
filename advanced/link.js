//filter function that takes a weird array of url paths and combines them

//https://www.xing.com/search/in/jobs?q%5Benabled_facets%5D%5B%5D=category_id_code&q%5Benabled_filters%5Bcategory_id_code%5D%5D%5B%5D=11
// <span data-nroute="[&quot;https:&quot;, &quot;&quot;, &quot;www.xing.com&quot;, &quot;jobs&quot;, &quot;mainz-trainee-sap-technology-consultant-2674881?ijt=jb_18&amp;paging_context=search&amp;ssearch=ha5lbmFibGVkX2ZhY2V0c4GwY2F0ZWdvcnlfaWRfY29kZYGldGVybXMUr2VuYWJsZWRfZmlsdGVyc4GwY2F0ZWdvcnlfaWRfY29kZYGldGVybXORojExr3NwZWNpYWxfZmlsdGVyc4Ckc2l6ZQqkZnJvbQA%3D&quot;]" class="nroute title job-posting-link name-page-link" data-reco-action="view" itemprop="title" title="Trainee SAP Technology Consultant (m/w)">Trainee SAP Technology Consultant (m/w)</span>


collection = data.results.collection1

for (var i = 0; i < collection.length; i++){
	link_array = JSON.parse(collection[i].link);
	var string = "";
	for (var j= 0; j < link_array.length; j++){
		if( j > 0){
			string = string + '/' + link_array[j];
		}
		else{
			string =  link_array[j];
		}
	}
	collection[i].link = string;



}












