interface IcandiesValue {
  id: string;
  nome: string;
  quantidade: number;
  preço: number;
}

interface CandiesState {
  value: IcandiesValue[];
}

export const initialState: CandiesState = {
  value: [],
};
