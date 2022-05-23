var price;
$( "#accordion" ).accordion({collapsible: true});
$( "#buy1" ).button()
		.click(function(event){
			price = 338;
			$( "#result" ).val(338);
			$( "#tempname" ).val("Покупка");
			$( "#dialog-form" ).dialog("option","title","Покупка VIVIENNE SABO cabaret premiere");
			$( "#dialog-form" ).dialog( "open" );
		});
$( "#buy2" ).button()
		.click(function(event){
			price = 690;
			$( "#result" ).val(690);
			$( "#tempname" ).val("Покупка");
			$( "#dialog-form" ).dialog("option","title","Покупка MAYBELLINE NEW YORK lash sensational");
			$( "#dialog-form" ).dialog( "open" );
		});
$( "#buy3" ).button()
		.click(function(event){
			price = 338;
			$( "#result" ).val(338);
			$( "#tempname" ).val("Покупка");
			$( "#dialog-form" ).dialog("option","title","Покупка LANCÔME cabaret premiere");
			$( "#dialog-form" ).dialog( "open" );
		});
$( "#buy4" ).button()
		.click(function(event){
			price = 338;
			$( "#result" ).val(338);
			$( "#tempname" ).val("Покупка");
			$( "#dialog-form" ).dialog("option","title","Покупка LAMEL PROFESSIONAL cabaret premiere");
			$( "#dialog-form" ).dialog( "open" );
		});
$( "#buy5" ).button()
		.click(function(event){
			price = 690;
			$( "#result" ).val(690);
			$( "#tempname" ).val("Покупка");
			$( "#dialog-form" ).dialog("option","title","Покупка CLINIQUE lash sensational");
			$( "#dialog-form" ).dialog( "open" );
		});

	$('#datepicker').datepicker({
	dateFormat : "dd.mm.yy",
	minDate: new Date($('#hiddendelivdate').val()),
	monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
});
	$( "#card" ).tooltip();
	$( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 550,
    width: 500,
    modal: true,
    buttons: {
        "Оформить": function() {
			if ($('#fio').val() == '' || $('#datepicker').val() == '' || $('#autocomplete').val() == '' || $('#card').val() == ''){
				$( "#becareful" ).dialog("open");
			}
			else {
				$( "#dialog-confirm" ).dialog("open");
			}
        }
		},
		close : function(event, ui) {
			$('#fio').val('');
			$('#datepicker').val('');
			$('#autocomplete').val('');
			$('#card').val('');
			slider.slider( "value", 0);
			select[ 0 ].selectedIndex = 0;
		}
    });
	$( "#town" ).selectmenu();
	var select = $( "#minbeds" )
	.on( "change", function() {
      slider.slider( "value", this.selectedIndex + 1 );
		$( "#result" ).val(((this.selectedIndex+1)*price));
    });
	var slider = $( "#slider" ).slider({
		min: 1,
		max: 4,
		range: "min",
		value: select[ 0 ].selectedIndex + 1,
		  slide: function( event, ui ) {
			select[ 0 ].selectedIndex = ui.value - 1;
			$( "#result" ).val((ui.value*price));
		  }
	});
	var availableTags = [
		"ул. Пушкина, д. Колотушкина"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});
		$( "#dialog-confirm" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
					"Купить": function() {
						$( this ).dialog( "close" );
							$( "#dialog-form" ).dialog( "close");
							$( "#thankyou" ).dialog("open");
					},
					"Нужно перепроверить": function() {
						$( this ).dialog( "close" );
						$( "#dialog-form" ).dialog( "close");
					}
				}
			});
			$( "#thankyou" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
					"Закрыть": function() {
						$( this ).dialog( "close" );
					}
				}
			});
			$( "#becareful" ).dialog({
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 400,
			modal: true,
			buttons: {
					"Закрыть": function() {
						$( this ).dialog( "close" );
					}
				}
			});