export const regionAddress = "https://psgc.cloud/api/regions"
export const provinceAddressByRegionId = (regionCode: string) => `https://psgc.cloud/api/regions/${regionCode}/provinces`;
export const stateAddressByProvinceCode = (provincecode: string) => `https://psgc.cloud/api/provinces/${provincecode}/municipalities`;