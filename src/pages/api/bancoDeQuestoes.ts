import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

export const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de chagas?',
        [   
            RespostaModel.errada("Abelha"),
            RespostaModel.errada("Barata"),
            RespostaModel.errada("Pulga"),
            RespostaModel.certa("Barbeiro"),
        ]),
    new QuestaoModel(202, "Qual o fruto conhecido no norte e nordeste como 'jerimum'?", [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora"),
    ])
]