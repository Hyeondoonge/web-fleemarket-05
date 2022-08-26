import { Region } from 'types/Region';

export async function getRegionsByKeword({
  keyword,
  per,
  page,
}: {
  keyword: string;
  per: number;
  page: number;
}): Promise<Region[]> {
  const res = await fetch(`/api/regions/search?keyword=${keyword}&per=${per}&page=${page}`);
  return (await res.json()).regions;
}

export async function postRegion(id: number) {
  const res = await fetch(`/api/regions`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ regionId: id }),
  });
  return res;
}

export async function deleteRegion(id: number) {
  const res = await fetch(`/api/regions`, {
    method: 'delete',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ regionId: id }),
  });
  return res;
}
