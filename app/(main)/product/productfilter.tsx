"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form"

// Define the schema
const filterSchema = z.object({
  categories: z.array(z.string()),
  types: z.array(z.string()),
})

type FilterValues = z.infer<typeof filterSchema>

interface ProductFilterProps {
  filterList: {
    categories: { id: string; label: string }[];
    types: { id: string; label: string }[];
  };
}

export default function ProductFilter({ filterList }: ProductFilterProps) {
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      categories: [],
      types: [],
    },
  })

  function onSubmit(data: FilterValues) {
    console.log("Selected Filters:", data)
    // Here you would typically filter your products list or update URL params
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 p-2">
        
        {/* Furniture Made By Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-900">Furniture Made By</h3>
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem className="space-y-3">
                {filterList.categories.map((cat) => (
                  <FormField
                    key={cat.id}
                    control={form.control}
                    name="categories"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            className="h-5 w-5 rounded-md border-slate-300 data-[state=checked]:bg-black data-[state=checked]:text-white"
                            checked={field.value?.includes(cat.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, cat.id])
                                : field.onChange(field.value?.filter((value) => value !== cat.id))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-base font-normal text-slate-700 cursor-pointer">
                          {cat.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </FormItem>
            )}
          />
        </div>

        {/* Furniture Types Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-900">Furniture Types</h3>
          <FormField
            control={form.control}
            name="types"
            render={() => (
              <FormItem className="space-y-3">
                {filterList.types.map((type) => (
                  <FormField
                    key={type.id}
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            className="h-5 w-5 rounded-md border-slate-300 data-[state=checked]:bg-black data-[state=checked]:text-white"
                            checked={field.value?.includes(type.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type.id])
                                : field.onChange(field.value?.filter((value) => value !== type.id))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-base font-normal text-slate-700 capitalize cursor-pointer">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </FormItem>
            )}
          />
        </div>

        {/* Filter Button */}
        <div className="pt-2">
          <Button 
            type="submit"
            variant="outline" 
            className="px-8 py-5 text-base border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Filter
          </Button>
        </div>
      </form>
    </Form>
  )
}