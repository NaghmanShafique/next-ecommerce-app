export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name: "price",
            title: "Product price",
            type: "number"
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                 {
                   type: "category"   
                 }
                ]
        },
        {
            name: "subcategory",
            title: "Product Sub Category",
            type: "reference",
            to: [
                 {
                   type: "subcategory"   
                 }
                ]
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
            of: [
                {
                    type:"image"
                }
            ]
        },
        {
            name: "size",
            title: "Sizes",
            type: "array",
            of: [
                  {
                    type : "string"
                  }
            ]
        }
    ]
}