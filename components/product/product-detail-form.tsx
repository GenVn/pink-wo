"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { productDetailSchema } from "@/lib/validation/product";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface ProductDetailFormProps extends React.HTMLAttributes<HTMLDivElement> {
  isMultipleOptions: boolean;
  optionName: string;
  optionDesc: string;
  optionValue: {
    id: number;
    name: string;
    optionPrice: number;
  }[];
}
type FormData = z.infer<typeof productDetailSchema>;

export default function ProductDetailForm({
  isMultipleOptions,
  optionName,
  optionDesc,
  optionValue,
}: ProductDetailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productDetailSchema),
  });
  async function onSubmit(data: FormData) {}
  return (
    <div className="flex flex-col gap-4 p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-lg font-bold">{optionName}</h1>
          <p>{optionDesc}</p>
        </div>

        {isMultipleOptions ? (
          <div className="flex flex-col gap-4">
            {optionValue.map((value) => (
              <div className="flex items-center gap-x-2">
                <Checkbox id={value.name} />
                <Label
                  htmlFor={value.name}
                  className="inline-flex flex-grow justify-between"
                >
                  <span>{value.name}</span>
                  <span>{`${Math.abs(value.optionPrice)}đ`}</span>
                </Label>
              </div>
            ))}
          </div>
        ) : (
          <RadioGroup defaultValue="medium" className="flex flex-col gap-4">
            {optionValue.map((value) => (
              <div className="flex items-center gap-2">
                <RadioGroupItem value={value.name} id={value.name} />
                <Label
                  htmlFor={value.name}
                  className="inline-flex flex-grow justify-between"
                >
                  <span>{value.name}</span>
                  <span>{`${Math.abs(value.optionPrice)}đ`}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </form>
    </div>
  );
}
