//* Infer 占位符   infer U ==number | null

type Infer<T> =T extends Array<infer U> ? U :T

type D = Infer<Array<number | null>>

