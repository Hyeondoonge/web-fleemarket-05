import { Category } from 'types/Category';

export async function getCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch('/api/category');
      resolve(res.json());
    }, 1000);
  });
}
