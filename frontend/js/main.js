function render_card(card){
    $("#card_name").html(card.name);
    $("#card_hotspot_text").html(card.hotspot);
    $("#card_source").html(card.source);
    $("#card_short_description").html(card.short_description);
    //$("#hotspot-text").html();
    
    let questions_list_html = '<ol>';    
    card.questions.forEach( value => questions_list_html += `<li>${value}</li>` );
    questions_list_html += '</ol>';
    $("#card_questions_list").html(questions_list_html);
        
    let tips_list_html = '<ul>';
    card.tips.forEach( value => tips_list_html += `<li>${value}</li>`); 
    tips_list_html += '</ul>';
    $("#card_tips_list").html(tips_list_html);

    $("#card_alert").html(card.alert);
    $("#card_info").html(card.info);
    $("#card_id").html(card.id);
}