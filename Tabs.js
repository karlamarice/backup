
// EMPLOYEE ASSET
$(document).ready(function(){
		$("#emp-view-asset").click(function(){
		$("#Emp-View-Assets").show();
		$("#Emp-Req-Items").hide();
		$("#Emp-transfer").hide();
	});
});

$(document).ready(function(){
		$("#emp-req-item").click(function(){
		$("#Emp-Req-Items").show();
		$("#Emp-View-Assets").hide();
		$("#Emp-transfer").hide();
	});
});

$(document).ready(function(){
		$("#emp-trans").click(function(){
		$("#Emp-transfer").show();
		$("#Emp-View-Assets").hide();
		$("#Emp-Req-Items").hide();
	});
});

//HEAD / MANAGER (ASSET TAB)
$(document).ready(function(){
		$("#hm-view-asset").click(function(){
		$("#HM-View-Assets").show();
		$("#HM-Req-Items").hide();
		$("#HM-transfer").hide();
	});
});

$(document).ready(function(){
		$("#hm-req-item").click(function(){
		$("#HM-Req-Items").show();
		$("#HM-View-Assets").hide();
		$("#HM-transfer").hide();
	});
});

$(document).ready(function(){
		$("#hm-trans").click(function(){
		$("#HM-transfer").show();
		$("#HM-View-Assets").hide();
		$("#HM-Req-Items").hide();
	});
});

//HEAD / MANAGER (PROCUREMENT TAB)
$(document).ready(function(){
		$("#hm-list-req").click(function(){
		$("#HM-list-req").show();
		$("#HM-catalog").hide();
		$("#HM-supp-contract").hide();
		$("#HM-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#hm-catalog").click(function(){
		$("#HM-catalog").show();
		$("#HM-list-req").hide();
		$("#HM-supp-contract").hide();
		$("#HM-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#hm-supp-contract").click(function(){
		$("#HM-supp-contract").show();
		$("#HM-list-req").hide();
		$("#HM-catalog").hide();
		$("#HM-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#hm-summ-bid").click(function(){
		$("#HM-summ-bid").show();
		$("#HM-list-req").hide();
		$("#HM-catalog").hide();
		$("#HM-supp-contract").hide();
	});
});

//RPCIREMENT OFFICER (ASSET TAB)
$(document).ready(function(){
		$("#pofficer-view-asset").click(function(){
		$("#PO-View-Assets").show();
		$("#PO-Req-Items").hide();
		$("#PO-transfer").hide();
	});
});

$(document).ready(function(){
		$("#pofficer-req-item").click(function(){
		$("#PO-Req-Items").show();
		$("#PO-View-Assets").hide();
		$("#PO-transfer").hide();
	});
});

$(document).ready(function(){
		$("#pofficer-trans").click(function(){
		$("#PO-transfer").show();
		$("#PO-View-Assets").hide();
		$("#PO-Req-Items").hide();
	});
});

//PROCUREMEMENT OFFICER (Procurement  Tab)
$(document).ready(function(){
		$("#pofficer-list-req").click(function(){
		$("#PO-list-req").show();
		$("#PO-catalog").hide();
		$("#PO-supp-contract").hide();
		$("#PO-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#pofficer-catalog").click(function(){
		$("#PO-catalog").show();
		$("#PO-list-req").hide();
		$("#PO-supp-contract").hide();
		$("#PO-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#pofficer-supp-contract").click(function(){
		$("#PO-supp-contract").show();
		$("#PO-list-req").hide();
		$("#PO-catalog").hide();
		$("#PO-summ-bid").hide();
	});
});

$(document).ready(function(){
		$("#pofficer-summ-bid").click(function(){
		$("#PO-summ-bid").show();
		$("#PO-list-req").hide();
		$("#PO-catalog").hide();
		$("#PO-supp-contract").hide();
	});
});

//PROCUREMENT OFFICER (PURCHASE TAB)
$(document).ready(function(){
		$("#pofficer-purchase-list").click(function(){
		$("#PO-purchase-list").show();
	});
});






document.addEventListener("DOMContentLoaded", function() {
	var tabs = document.querySelectorAll('#tabbed li');

		for (var i = 0, len = tabs.length; i < len; i++) {
			tabs[i].addEventListener("click", function() {
				if (this.classList.contains('active'))
					return;

				var parent = this.parentNode,
					innerTabs = parent.querySelectorAll('li');

				for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
					innerTabs[index].classList.remove('active');
					}

				this.classList.add('active');
		});
	}
});