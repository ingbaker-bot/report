// ══════════════════════════════════════════
// 多租戶前端設定檔 (config.js) v2
// ══════════════════════════════════════════

const SYSTEM_CONFIG = {
  // ── 民有里設定 ──
  'minyou': {
    villageName: '民有里',
    city: '新北市',
    district: '中和區',
    chiefName: '王大明',           // 預留：可隨時修改里長姓名
    reportPrefix: 'MIY',          // 通報編號前綴 (例: MIY-2026-1234)
    liffIdIndex: '2009643244-BgwBKoP8',
    liffIdAdmin: '2009643244-9i0hXQpm',
    gasUrl: 'https://script.google.com/macros/s/AKfycbzYdUAeUxheGXZo-1Y54frfJ90An0xp8Zw8jOCVNpe5upcVJcP-gfD4KV-Sp7IwlXpu/exec',
    adminUids: ['U56dab987a29938f8e4a5c07e025bffe5','Ucc99fd9571fb5fb8b0c8eb608fe57063','Ue2ee7b42e30438975bc810b694c8bade']
  },
  
  // ── 建民里設定 ──
  'jianmin': {
    villageName: '建民里',
    city: '台北市',
    district: '士林區',
    chiefName: '簡妤年',           
    reportPrefix: 'JIA',
    liffIdIndex: '2009667380-LQ3kTHBw', // 請替換為建民里真實 LIFF ID
    liffIdAdmin: '2009667380-qs3zovvv',
    gasUrl: 'https://script.google.com/macros/s/AKfycbwHD3_MDhrwFUQdum_fQTZiSJNZknsIMUTzwjtPCP_1Z_GRQpg6Yx3bmw9z1hwA6X4g/exec',
    adminUids: ['U56dab987a29938f8e4a5c07e025bffe5','U111dd208a2fc591089e770f3b960cec9']
  }
};

// ── 全系統共用金鑰 ──
const GLOBAL_CONFIG = {
  NLSC_API: 'https://api.nlsc.gov.tw/other/TownVillagePointQuery',
  GMAPS_KEY: 'AIzaSyBFoTy6ZmmVCjNYHIvUEl0I8n2VZKkm1RA' 
};
