import { deleteRegion, postRegion } from 'apis/region';
import RegionSelectLayout from 'layouts/RegionSelectLayout';
import React, { useState } from 'react';
import { Region } from 'types/Region';

export default function RegionSelectpage() {
  const [selectedRegions, setSelectdRegions] = useState<Region[]>([
    // { id: 1, name: '대구시 딜서구 용산동' },
  ]);

  const addUserRegion = async ({ id, name }: Region) => {
    setSelectdRegions([...selectedRegions, { id, name }]);
    const res = await postRegion(id);

    if (res.ok) {
      // set User regions
      console.log('success fully add user regions');
    }
  };

  const deleteUserRegion = async (id: number) => {
    const result = confirm('정말 삭제하시겠습니까?');
    if (!result) return;
    const newSelectedRegions = selectedRegions.filter(({ id: regionId }) => regionId !== id);
    setSelectdRegions([...newSelectedRegions]);
    const res = await deleteRegion(id);

    if (res.ok) {
      // set User regions
      console.log('success fully delete user region');
    }
  };

  return (
    <RegionSelectLayout
      selectedRegions={selectedRegions}
      addUserRegion={addUserRegion}
      deleteUserRegion={deleteUserRegion}
    />
  );
}
