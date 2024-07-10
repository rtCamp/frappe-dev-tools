frappe.db.get_single_value('Developer Setting', 'navbar_background_color').then(color => {
    if(color) {
        // Apply the color to the navbar
        $('.navbar').css('background-color', color);
    }
});