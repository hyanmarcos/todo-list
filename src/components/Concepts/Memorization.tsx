import { useCallback, useMemo, useState } from "react";

interface MemorizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<MemorizationProps> = ({
  financialData,
}) => {
  //
  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      console.log("Calculando o total de receitas");

      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcomes) => {
      console.log("Calculando o total de despesas");

      return (total += outcomes);
    }, 0);
  }, [financialData.outcomes]);

  const aplicarDesconto = useCallback(
    (desconto: number) => {
      return totalOutcomes * (1 - desconto);
    },
    [totalOutcomes]
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>
      <h2>useMemo</h2>

      <p>{`Total de Receitas: R$ ${showValues ? totalIncomes : "XXXXXX"}`}</p>
      <br />
      <p>{`Total de Receitas: R$ ${showValues ? totalOutcomes : "XXXXXX"}`}</p>
      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "Ocultar valores" : "Mostrar valores"}
      </button>
    </div>
  );
};
