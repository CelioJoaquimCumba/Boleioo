import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "../atoms/Input";
import { useFormik } from "formik";
import { VehicleValidation } from "@/form validations/VehicleValidation";
import { SelectInput } from "../atoms/SelectInput";

export const VehicleDialog = () => {
  const formik = useFormik(VehicleValidation());
  const [availableModels, setAvailableModels] = useState<Array<string>>([]);

  const makeModels:Array<{make: string, models: Array<string>}> = [
    {
      make: "Toyota",
      models: ["auris", "vitz", "corolla"],
    },
    {
      make: "Honda",
      models: ["civic", "accord", "cr-v"],
    },
    {
      make: "Ford",
      models: ["fiesta", "mustang", "explorer"],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (field: string, value: any) => {
    if (field === 'make') {
      const selectedMake: string = value;
      // Set available models based on the selected make
      setAvailableModels(makeModels.find((make) => make.make === selectedMake)?.models || []);
    }

    formik.setValues({
      ...formik.values,
      [field]: value,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus />
          <span>Add Vehicle</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl overflow-y-auto overflow-x-hidden h-5/6 sm:h-5/6">
        <DialogHeader>
          <DialogTitle>Add/Edit Route</DialogTitle>
          <DialogDescription>
            Make changes to your route here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-start gap-4 py-4">
            {/* SelectInput for "make" */}
            <SelectInput
              value={formik.values.make}
              onChange={(e) => handleChange("make", e)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.make && formik.errors.make ? true : false}
              hint={formik.errors.make}
              id="make"
              label="Make"
              values={makeModels.map((make) => make.make)} // Add your make options
            />

            {/* SelectInput for "model" */}
            <SelectInput
              value={formik.values.model}
              onChange={(e) => handleChange("model", e)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.model && formik.errors.model ? true : false}
              hint={formik.errors.model}
              id="model"
              label="Model"
              values={availableModels}
            />

            {/* Input for "color" */}
            <SelectInput
              value={formik.values.color}
              onChange={(e) => handleChange("color", e)}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.color && formik.errors.color ? true : false}
              hint={formik.errors.color}
              id="color"
              label="Color"
              values={["blue", "red", "black", "gray", "white"]}
            />
            
             {/* Input for "year" */}
            <Input
              id="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.year && formik.errors.year ? true : false}
              hint={formik.errors.year}
              label="Year"
              type="number"
              placeholder="Year"
            />

            {/* Input for "cylinders" */}
            <Input
              id="cylinders"
              value={formik.values.cylinders}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.cylinders && formik.errors.cylinders? true : false}
              hint={formik.errors.cylinders}
              label="Cylinders"
              type="number"
              placeholder="Cylinders"
            />

            {/* Input for "plate" */}
            <Input
              id="plate"
              value={formik.values.plate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.plate && formik.errors.plate ? true : false}
              hint={formik.errors.plate}
              label="Plate"
              placeholder="Plate"
            />

            {/* Input for "seats" */}
            <Input
              id="seats"
              value={formik.values.seats}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.seats && formik.errors.seats ? true : false}
              hint={formik.errors.seats}
              label="Seats"
              placeholder="Seats"
              type="number"
              min={0}
            />

          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
