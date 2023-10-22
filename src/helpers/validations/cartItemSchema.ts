//* LIB
import { z } from 'zod';

export const cartItemSchema = z.object({
	id: z.string(),
	name: z.string(),
	image: z.string(),
	size: z.string(),
	price: z.number(),
});

export const cartsSchema = z.array(cartItemSchema);
