import ClientConstellation, { bds } from "@constl/ipa";

const កម្រិតទឹកសមុទ្រ: bds.schémaSpécificationBd = {
    licence: "ODb1-1_0",
    motsClefs: [],
    tableaux: [
        {
            cols: [
               {
                idColonne: 'លេខសម្គាល់',
                idVariable: 'OBS-KSM 001'
               },
               {
                idColonne: 'រយះទទឹង',
                idVariable: 120,
               },
               {
                idColonne: 'រយះបណ្ដោយ',
                idVariable: 200,
               },
               {
                idColonne: 'ថ្ងៃខែឆ្នាំ',
                idVariable: '2022-10-02',
               },
               {
                idColonne: 'ពេលវេលា',
                idVariable: '11:12',
               },
               {
                idColonne: 'តម្លៃEc',
                idVariable: 200,
               }
            ],
            clef: "",
        },
    ],
};