import $ from "jquery";

const duration = 300;

function filterByType(type) {
	$("[session-types]").each(function(i, e) {
		const target = $(this).attr("session-types") === type || type === null;
		if (target) {
			$(this).fadeIn(duration);
		} else {
			$(this).fadeOut(duration);
		}
	});
}

$.fn.typeButtons = function() {
	const types = new Set();
	$("[session-types]").each(function(i, e) {
		types.add($(e).attr("session-types"));
	});

	const btns = Array.from(types).map((type) => {
		const btn = $("<button>")
			.addClass(["btn", "btn-primary"])
			.html(type);
		btn.click((e) => filterByType(type));
		return btn;
	});

	const btnAll = $("<button>")
		.addClass(["btn", "btn-primary", "active"])
		.html("Todas");
	btnAll.click((e) => filterByType(null));
	btns.push(btnAll);

	const btnGroup = $("<div>").addClass(["btn-group"]);
	btnGroup.append(btns);

	$(this).html(btnGroup);
	return this;
};

$("[session-types-buttons]").typeButtons();
