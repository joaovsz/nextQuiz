import QuestaoModel from '@/model/questao';
import questoes from '../bancoDeQuestoes'
// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: { status: (arg0: number) => {
    send(): unknown; (): any; new(): any; json: { (arg0: { id: number; enunciado: string; respostas: { valor: string; certa: boolean; revelada: boolean }[]; acertou: boolean }): void; new(): any } 
} }) => { 
    const idSelecionado = +req.query.id
    const unicaQuestaoOuNada = questoes.filter((questao:QuestaoModel) => questao.id === idSelecionado)
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.converterParaObjeto())
    } else {
        res.status(204).send()
    }
    res.status(200).json(questoes[0].converterParaObjeto())
}