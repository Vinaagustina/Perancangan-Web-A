//Filter Jenjang dan Mata Pelajaran
function filter_les() {
	$("select[name='mapel'],select[name='jenjang']").change(function(event) {
		var mapel = $("select[name='mapel']").val();
		var jenjang = $("select[name='jenjang']").val();

		console.log('mapel= '+mapel);
		console.log('jenjang= '+jenjang);

		if (mapel != "" || jenjang != "") {
			$(".link_layanan").hide();
			// $("#load_btn").hide();
			cariVideo();

			if (mapel != "" && jenjang != "") {
				console.log('m dan j');
				$(".link_layanan").each(function(index, el) {
					if ($(el).attr('mapel').toLowerCase() == mapel.toLowerCase() && $(el).attr('jenjang').toLowerCase() == jenjang.toLowerCase() ) {
						$(el).show();
					}
				});
			}
			else if(jenjang == ""){
				$(".link_layanan").each(function(index, el) {
					if ($(el).attr('mapel').toLowerCase() == mapel.toLowerCase()) {
						$(el).show();
					}
				});
			}
			else if(mapel == ""){
				$(".link_layanan").each(function(index, el) {
					if ($(el).attr('jenjang').toLowerCase() == jenjang.toLowerCase()) {
						$(el).show();
					}
				});
			}
		}
		else if (mapel == "" && jenjang == "") {
			$(".link_layanan").show();
			cariVideo();
		}

	});
}
