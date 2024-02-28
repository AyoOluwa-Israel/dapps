import { getBookDetails } from "@/services/bookServices";
import { useQuery } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { TBookDetails } from "@/types";
import { formatDate } from "@/libs/formatDate";

type Column = {
  field: string;
  header: string;
};

const columns: Column[] = [
  { field: "sn", header: "S/N" },
  { field: "first_name", header: "First Name" },
  { field: "last_name", header: "Last Name" },
  { field: "full_name", header: "Full Name" },
  { field: "date_created", header: "Date" },
];

const CheckList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getBookDetails"],
    queryFn: getBookDetails,
  });

  // console.log(data);

  const contactData: TBookDetails[] = data
    ? data.map((el, i) => ({
        id: el?.id,
        sn: i + 1,
        first_name: el?.first_name,
        last_name: el?.last_name,
        full_name: el?.full_name,
        is_accepted: el?.is_accepted,
        date_created: formatDate(el?.date_created),
      }))
    : [];

  return (
    <div className="w-[90%] mx-auto">
      <p className="text-center py-4 font-semibold text-2xl">List of Attendees</p>
      <div className="mt-4">
        <table className="w-[100%] rounded-lg overflow-hidden">
          <thead className=" text-sm bg-[#F2F2F2]  border-b-[1px] ">
            <tr className=" h-[45px] px-7 text-left">
              {columns &&
                columns.map((head, i) => (
                  <th key={i} className="pl-4">
                    {head.header}{" "}
                  </th>
                ))}
            </tr>
          </thead>

          <tbody>
            {isPending ? (
              <>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                  <tr key={i} className="h-[50px] border-b-[1px] text-s text-[#151515] font-[500]">
                    {columns?.map((_, i) => (
                      <td key={i} className="pl-4">
                        <Skeleton />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ) : (
              <>
                {contactData &&
                  contactData.map((row, i) => (
                    <tr key={i} className="h-[50px] border-b-[1px] text-sm text-[#151515] font-[500]">
                      {columns?.map((col: Column, i) => (
                        <td key={i} className="pl-4 font-light text-textGrey">
                          {row[col.field as keyof TBookDetails]}
                        </td>
                      ))}
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckList;
