
exports.seed = function (knex) {
    return knex('subelement').insert([
        { class: 0, subelement_Id: "T0", subelement_Title: 'Electrical safety' },
        { class: 0,subelement_Id: "T1", subelement_Title: 'FCC Rules' },
        { class: 0,subelement_Id: "T2", subelement_Title: 'Operating Procedures' },
        { class: 0,subelement_Id: "T3", subelement_Title: 'Radio wave characteristics' },
        { class: 0,subelement_Id: "T4", subelement_Title: 'Amateur radio practices/set-up' },
        { class: 0,subelement_Id: "T5", subelement_Title: 'Electrical principles' },
        { class: 0,subelement_Id: "T6", subelement_Title: 'Electrical components' },
        { class: 0,subelement_Id: "T7", subelement_Title: 'Station equipment' },
        { class: 0,subelement_Id: "T8", subelement_Title: 'Modulation modes' },
        { class: 0,subelement_Id: "T9", subelement_Title: 'Antennas and feed lines' },
    ]);
};