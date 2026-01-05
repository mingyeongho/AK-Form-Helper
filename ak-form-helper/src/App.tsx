import { useState } from "react";
import "./App.css";
import { Textarea } from "./components/ui/textarea";
import { strToNum } from "./lib/utils";
import { Toaster } from "./components/ui/sonner";
import DataTable from "./components/data-table";

export type DataType = {
  id: string;
  po: string; // 발주서 id
  partNo: string; // 품목명
  pallet: number; // 팔레트 개수, 단위: PG
  subTotal: number; // 개수, 단위: EA
  netWeight: number; // 순중량, 단위: KGS
  grossWeight: number; // 총중량, 단위: KGS
};

function App() {
  const [data, setData] = useState<DataType[]>([]);

  const onPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    try {
      const clipboardData = e.clipboardData.getData("text");
      const rowDatas = clipboardData.split("\n");
      const formattedRows = rowDatas.map((row) => row.split("\t"));

      const newTableData: DataType[] = [];
      formattedRows.forEach((row, idx) => {
        if (idx === 0) return;

        const po = row[1],
          partNo = row[2],
          pallet = row[9],
          subTotal = row[12],
          netWeight = row[14],
          grossWeight = row[16];

        if (partNo === "") return;

        newTableData.push({
          id: `${po}_${partNo}`,
          po,
          partNo,
          pallet: strToNum(pallet),
          subTotal: strToNum(subTotal),
          netWeight: strToNum(netWeight),
          grossWeight: strToNum(grossWeight),
        });

        setData(newTableData);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="p-4">
      <Textarea
        className="resize-none"
        placeholder="엑셀의 테이블을 붙여넣어주세요."
        autoComplete="off"
        onPaste={onPaste}
      />
      <div className="mt-4">
        <DataTable data={data} />
      </div>
      <Toaster position="top-center" />
    </main>
  );
}

export default App;
