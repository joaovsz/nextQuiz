import { Embaralhar } from "@/functions/arrays";
import QuestaoModel from "@/model/questao";
import  questoes  from "../bancoDeQuestoes"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any[]): void; new(): any } } }) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(Embaralhar(ids))
}