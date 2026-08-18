/* ==========================================
   Stray Kids(스트레이 키즈) 취향표
========================================== */

/* 멤버 정보 (id / 이름 / 행-이니셜 / 열-이니셜 / 기본색 / 기본사진)
   rowInitial: 이 멤버가 "행"일 때 커플명 앞에 오는 글자
   colInitial: 이 멤버가 "열"일 때 커플명 뒤에 오는 글자
   순서: 방찬, 리노, 창빈, 현진, 한, 필릭스, 승민, 아이엔

   ⚠ photo 사진이 안 보인다면?
   아래 photo 경로와 저장소(assets 폴더)에 올린 실제 파일명이
   대소문자/확장자(.png, .jpg 등)까지 정확히 같은지 확인해주세요.
   파일이 없거나 이름이 다르면 화면에는 자동으로 이니셜 아바타가 나옵니다. */
const MEMBERS_BASE = [
    { id: "bangchan", name: "방찬",   rowInitial: "캥", colInitial: "캥", color: "#1a1a1a", photo: "assets/profile_bangchan.png" },
    { id: "leeknow",  name: "리노",   rowInitial: "믾", colInitial: "믾", color: "#321a1d", photo: "assets/profile_leeknow.png" },
    { id: "changbin", name: "창빈",   rowInitial: "창", colInitial: "창", color: "#491b1f", photo: "assets/profile_changbin.png" },
    { id: "hyunjin",  name: "현진",   rowInitial: "황", colInitial: "황", color: "#611b22", photo: "assets/profile_hyunjin.png" },
    { id: "han",      name: "한",     rowInitial: "쳌", colInitial: "쳌", color: "#781b25", photo: "assets/profile_han.png" },
    { id: "felix",    name: "필릭스", rowInitial: "필", colInitial: "필", color: "#901b28", photo: "assets/profile_felix.png" },
    { id: "seungmin", name: "승민",   rowInitial: "승", colInitial: "승", color: "#a71c2a", photo: "assets/profile_seungmin.png" },
    { id: "ien",      name: "아이엔", rowInitial: "양", colInitial: "양", color: "#bf1c2d", photo: "assets/profile_ien.png" }
];

const MEMBER_MAP = {};
MEMBERS_BASE.forEach(m => { MEMBER_MAP[m.id] = m; });

/* 스키즈는 고정 8인 그룹이라 인원 토글 없이 항상 전체 멤버를 사용한다. */
function getActiveMembers() {
    return MEMBERS_BASE;
}

/* ==========================================
   커플명(CP명) 전체 목록
   ------------------------------------------
   "행멤버id-열멤버id": "표시할 이름" 형태로 64개 조합이 전부 나열되어 있습니다.
   원하는 CP명을 바꾸고 싶으면 아래에서 해당 줄의 " " 안 글자만 수정하면 됩니다.
   (같은 멤버끼리의 조합, 예: "bangchan-bangchan"은 "본인 조합명"이라고 부르고
   화면 상단의 "본인 조합명 표시" 체크박스로 켜고 끌 수 있습니다.
   꺼져 있으면 이 값 대신 "-"이 표시됩니다.)

   멤버 id 목록: bangchan(방찬), leeknow(리노), changbin(창빈), hyunjin(현진),
                han(한), felix(필릭스), seungmin(승민), ien(아이엔) */
const PAIR_NAMES = {
    "bangchan-bangchan": "캥캥", // 방찬×방찬
    "bangchan-leeknow": "캥밍", // 방찬×리노
    "bangchan-changbin": "캥창", // 방찬×창빈
    "bangchan-hyunjin": "캥황", // 방찬×현진
    "bangchan-han": "캥쳌", // 방찬×한
    "bangchan-felix": "캥필", // 방찬×필릭스
    "bangchan-seungmin": "캥승", // 방찬×승민
    "bangchan-ien": "캥양", // 방찬×아이엔

    "leeknow-bangchan": "밍캥", // 리노×방찬
    "leeknow-leeknow": "믾믾", // 리노×리노
    "leeknow-changbin": "밍창", // 리노×창빈
    "leeknow-hyunjin": "믾황", // 리노×현진
    "leeknow-han": "각뚜", // 리노×한
    "leeknow-felix": "믾필", // 리노×필릭스
    "leeknow-seungmin": "밍승", // 리노×승민
    "leeknow-ien": "믾양", // 리노×아이엔

    "changbin-bangchan": "창캥", // 창빈×방찬
    "changbin-leeknow": "창밍", // 창빈×리노
    "changbin-changbin": "창창", // 창빈×창빈
    "changbin-hyunjin": "창황", // 창빈×현진
    "changbin-han": "창쳌", // 창빈×한
    "changbin-felix": "창필", // 창빈×필릭스
    "changbin-seungmin": "창승", // 창빈×승민
    "changbin-ien": "창양", // 창빈×아이엔

    "hyunjin-bangchan": "황캥", // 현진×방찬
    "hyunjin-leeknow": "황밍", // 현진×리노
    "hyunjin-changbin": "황창", // 현진×창빈
    "hyunjin-hyunjin": "셉황", // 현진×현진
    "hyunjin-han": "황쳌", // 현진×한
    "hyunjin-felix": "황필", // 현진×필릭스
    "hyunjin-seungmin": "황승", // 현진×승민
    "hyunjin-ien": "현양", // 현진×아이엔

    "han-bangchan": "쳌캥", // 한×방찬
    "han-leeknow": "한밍", // 한×리노
    "han-changbin": "쳌창", // 한×창빈
    "han-hyunjin": "쳌황", // 한×현진
    "han-han": "쳌쳌", // 한×한
    "han-felix": "쳌필", // 한×필릭스
    "han-seungmin": "쳌첼", // 한×승민
    "han-ien": "쳌양", // 한×아이엔

    "felix-bangchan": "필캥", // 필릭스×방찬
    "felix-leeknow": "필믾", // 필릭스×리노
    "felix-changbin": "필창", // 필릭스×창빈
    "felix-hyunjin": "필황", // 필릭스×현진
    "felix-han": "필쳌", // 필릭스×한
    "felix-felix": "필필", // 필릭스×필릭스
    "felix-seungmin": "냥첼", // 필릭스×승민
    "felix-ien": "필양", // 필릭스×아이엔

    "seungmin-bangchan": "승캥", // 승민×방찬
    "seungmin-leeknow": "승밍", // 승민×리노
    "seungmin-changbin": "승창", // 승민×창빈
    "seungmin-hyunjin": "승황", // 승민×현진
    "seungmin-han": "첼쳌", // 승민×한
    "seungmin-felix": "승필", // 승민×필릭스
    "seungmin-seungmin": "승승", // 승민×승민
    "seungmin-ien": "승양", // 승민×아이엔

    "ien-bangchan": "양캥", // 아이엔×방찬
    "ien-leeknow": "양밍", // 아이엔×리노
    "ien-changbin": "양창", // 아이엔×창빈
    "ien-hyunjin": "양황", // 아이엔×현진
    "ien-han": "양쳌", // 아이엔×한
    "ien-felix": "양필", // 아이엔×필릭스
    "ien-seungmin": "양승", // 아이엔×승민
    "ien-ien": "양양", // 아이엔×아이엔
};

function getPairName(rowId, colId) {
    return PAIR_NAMES[`${rowId}-${colId}`] || (MEMBER_MAP[rowId].rowInitial + MEMBER_MAP[colId].colInitial);
}

/* ==========================================
   본인 조합명 (같은 멤버끼리의 조합) on/off
========================================== */
const SELF_PAIR_KEY = "skz-self-pair-visible";
const selfPairSaved = localStorage.getItem(SELF_PAIR_KEY);
let selfPairVisible = selfPairSaved === null ? true : selfPairSaved === "true";

/* 표 칸에 실제로 그릴 텍스트. 본인 조합이면서 표시가 꺼져있으면 "-"만 보여준다.
   (모달 제목 등 다른 곳에서는 항상 getPairName으로 실제 이름을 그대로 쓴다.) */
function getDisplayPairName(rowId, colId) {
    if (rowId === colId && !selfPairVisible) {
        return "-";
    }
    return getPairName(rowId, colId);
}

const options = [
    { name: "OTP",      color: "#f7cde0" },
    { name: "좋아함",   color: "#ffafaf" },
    { name: "호감",     color: "#fcee90" },
    { name: "관심있음", color: "#baebbb" },
    { name: "관심 X",   color: "#ffffff" },
    { name: "별로",     color: "#bfeefd" },
    { name: "지뢰",     color: "#999999" }
];

/* 사용자가 직접 고른 커스텀 색상 (name -> hex).
   여기에 값이 있으면 기본 color 대신 이 색을 쓴다.
   options 배열의 기본값 자체는 절대 덮어쓰지 않는다. */
const CUSTOM_COLOR_KEY = "skz-custom-colors";
let customColors = JSON.parse(localStorage.getItem(CUSTOM_COLOR_KEY)) || {};

function getOptionColor(option) {
    return customColors[option.name] || option.color;
}

function setCustomColor(name, hex) {
    customColors[name] = hex;
    localStorage.setItem(CUSTOM_COLOR_KEY, JSON.stringify(customColors));
}

function resetCustomColors() {
    customColors = {};
    localStorage.removeItem(CUSTOM_COLOR_KEY);
}

const STORAGE_KEY = "skz-yeop-rps";
const LR_STORAGE_KEY = "skz-lr-rps";
const LR_CELL_COUNT = 12;

/* 공수 취향표 열 배치: 스키즈는 항상 8인이므로 3-3-2로 고정 배치한다. */
const LR_COLUMN_LAYOUTS = {
    8: [3, 3, 2]
};

function getLrColumnLayout(memberCount) {
    return LR_COLUMN_LAYOUTS[memberCount] || [Math.ceil(memberCount / 3), Math.ceil(memberCount / 3), Math.floor(memberCount / 3)];
}

/* 행/열 개별 숨기기 상태 (멤버 id 기준, rows/cols 따로 관리) */
const HIDDEN_KEY = "skz-hidden-members";
const hiddenSaved = JSON.parse(localStorage.getItem(HIDDEN_KEY)) || { rows: [], cols: [] };
let hiddenRows = new Set(hiddenSaved.rows);
let hiddenCols = new Set(hiddenSaved.cols);

function saveHiddenState() {
    localStorage.setItem(HIDDEN_KEY, JSON.stringify({
        rows: [...hiddenRows],
        cols: [...hiddenCols]
    }));
}

const table = document.getElementById("chartTable");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const optionGrid = document.getElementById("optionGrid");
const modalExtra = document.getElementById("modalExtra");
const closeModal = document.getElementById("closeModal");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const guideListRps = document.getElementById("guideListRps");
const guideListLr = document.getElementById("guideListLr");
const legendRps = document.getElementById("legendRps");

const dateToggleWrap = document.getElementById("dateToggleWrap");
const dateToggle = document.getElementById("dateToggle");
const dateTextRps = document.getElementById("dateTextRps");
const dateTextLr = document.getElementById("dateTextLr");
const selfPairToggle = document.getElementById("selfPairToggle");

const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

const saveModal = document.getElementById("saveModal");
const previewImage = document.getElementById("previewImage");
const closeSaveModal = document.getElementById("closeSaveModal");

const tabRps = document.getElementById("tabRps");
const tabLr = document.getElementById("tabLr");
const captureAreaRps = document.getElementById("captureArea");
const captureAreaLr = document.getElementById("captureAreaLr");
const lrGrid = document.getElementById("lrGrid");
const photoInput = document.getElementById("photoInput");
const scaleWrap = document.getElementById("scaleWrap");

/* CSS의 @media (max-width: 768px)과 동일한 기준.
   이 폭 이하에서는 JS로 축소하지 않고, 반응형 레이아웃을 그대로 사용한다. */
const MOBILE_BREAKPOINT = 768;
const BASE_DESKTOP_CAPTURE_WIDTH = 1680;

/* ==========================================
   앋페스 표 - 멤버 수가 줄어도 칸 크기(px)는 그대로 유지하고,
   좌우 여백만 비율을 고정한 채 함께 줄어들도록 하기 위한 기준값.
   (8인 기준 디자인값에서 역산)
========================================== */
const RPS_BASE_COLS = 8;
const RPS_BASE_PADDING_X = 88;   // #captureArea 기본 좌우 padding
const RPS_HEADER_COL_W = 155;    // th:first-child 고정 너비
const RPS_BASE_CONTENT_W = BASE_DESKTOP_CAPTURE_WIDTH - RPS_BASE_PADDING_X * 2; // 1504
const RPS_CELL_W = (RPS_BASE_CONTENT_W - RPS_HEADER_COL_W) / RPS_BASE_COLS; // 8인 기준 칸 너비
const RPS_PADDING_RATIO = RPS_BASE_PADDING_X / RPS_BASE_CONTENT_W; // 여백 비율(고정)

/* 현재 표시 중인 캡처 영역의 실제 너비. rps/lr 탭 각각 멤버 수(열 배치)에 따라
   값이 바뀐다. fitCaptureArea/저장 시 currentTab에 맞는 값을 기준으로 맞춘다. */
let currentRpsCaptureWidth = BASE_DESKTOP_CAPTURE_WIDTH;
let currentLrCaptureWidth = BASE_DESKTOP_CAPTURE_WIDTH;

function getCurrentCaptureWidth() {
    return currentTab === "rps" ? currentRpsCaptureWidth : currentLrCaptureWidth;
}

/* 표 칸 크기를 고정한 채, 열 개수에 맞춰 표/캡처 영역 너비와 좌우 여백을 다시 계산해 적용.
   모바일 폭에서는 반응형 CSS(width:100%)를 그대로 써야 하므로 px 지정을 건너뛴다. */
function applyRpsSizing(numCols) {
    const contentW = RPS_HEADER_COL_W + numCols * RPS_CELL_W;
    const paddingX = contentW * RPS_PADDING_RATIO;
    const captureW = contentW + paddingX * 2;

    currentRpsCaptureWidth = captureW;

    const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    if (screenWidth <= MOBILE_BREAKPOINT) {
        captureAreaRps.style.width = "";
        captureAreaRps.style.paddingLeft = "";
        captureAreaRps.style.paddingRight = "";
        table.style.width = "";
        return;
    }

    captureAreaRps.style.width = `${captureW}px`;
    captureAreaRps.style.paddingLeft = `${paddingX}px`;
    captureAreaRps.style.paddingRight = `${paddingX}px`;
    table.style.width = `${contentW}px`;
}

/* ==========================================
   공수 표 - 열이 3개(8인)에서 2개(7인)로 줄어들 때, 칸 너비를 3열 기준 그대로
   두면(원래 디자인) 좌우에 빈 여백이 남고, 2열 전체 폭(1580px)에 맞춰 꽉 채우면
   칸이 거의 2배 가까이 넓어져 글자칸 비율이 어색해진다. 그 중간으로, 열 개수가
   줄어든 비율의 제곱근만큼만 칸 너비를 넓혀서 여백도 과하지 않고 칸도 과하게
   길어지지 않는 선에서 맞춘다. 좌우 여백(padding)은 항상 기본값으로 고정. */
const LR_BASE_COLS = 3;
const LR_BASE_PADDING_X = 50;   // #captureAreaLr 기본 좌우 padding (항상 고정)
const LR_GAP_X = 50;            // .lr-grid 열 사이 간격(column-gap)
const LR_BASE_CONTENT_W = BASE_DESKTOP_CAPTURE_WIDTH - LR_BASE_PADDING_X * 2; // 1580
const LR_COL_W = (LR_BASE_CONTENT_W - LR_GAP_X * (LR_BASE_COLS - 1)) / LR_BASE_COLS; // 3열 기준 칸 너비(약 493px)

function applyLrSizing(numCols) {
    const colW = LR_COL_W * Math.sqrt(LR_BASE_COLS / numCols);
    const contentW = colW * numCols + LR_GAP_X * (numCols - 1);
    const captureW = contentW + LR_BASE_PADDING_X * 2;

    currentLrCaptureWidth = captureW;
    lrGrid.style.setProperty("--lr-cols", numCols);

    const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    if (screenWidth <= MOBILE_BREAKPOINT) {
        captureAreaLr.style.width = "";
        captureAreaLr.style.paddingLeft = "";
        captureAreaLr.style.paddingRight = "";
        lrGrid.style.width = "";
        return;
    }

    captureAreaLr.style.width = `${captureW}px`;
    captureAreaLr.style.paddingLeft = `${LR_BASE_PADDING_X}px`;
    captureAreaLr.style.paddingRight = `${LR_BASE_PADDING_X}px`;
    lrGrid.style.width = `${contentW}px`;
}

let currentTarget = null; // { type: "cell", td } | { type: "row", index } | { type: "col", index }
let currentTab = "rps";
let currentPhotoIndex = null;
let currentBlobUrl = null; // 저장 미리보기/다운로드에 쓰이는 Blob URL (재사용 전 해제)

const HISTORY_LIMIT = 50;
let historyStack = [];
let redoStack = [];

let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

let lrData = JSON.parse(localStorage.getItem(LR_STORAGE_KEY)) || {
    texts: {},
    cells: {},
    photos: {}
};

const GUIDE_TEXT = {
    rps: [
        "셀을 선택하여 호감도를 표시해주세요.",
        "멤버 이름을 누르면 줄 전체선택/숨기기가 가능해요."
    ],
    lr: [
        "L-R 사이 원하는 부분의 칸을 선택하고, 아래 칸에 자유롭게 적어보세요.",
        "각 멤버의 프로필을 누르면 사진 변경이 가능해요."
    ]
};

function renderGuide(tab) {
    const target = tab === "rps" ? guideListRps : guideListLr;
    target.innerHTML = "";
    GUIDE_TEXT[tab].forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        target.appendChild(p);
    });
}

/* 범례를 options 배열(+커스텀 색상) 기준으로 매번 새로 그린다.
   색이 바뀌어도 범례가 항상 실제 색과 일치하도록. */
function renderLegend() {
    if (!legendRps) return;
    legendRps.innerHTML = "";
    options.forEach(option => {
        const color = getOptionColor(option);
        const isNone = color.toLowerCase() === "#ffffff";
        const item = document.createElement("div");
        item.className = "legend-item";
        item.innerHTML = `
            <span class="color${isNone ? " dashed" : ""}" style="background:${color}"></span>${option.name}
        `;
        legendRps.appendChild(item);
    });
}

/* ==========================================
   날짜 표시 (제목 옆 260810 ver. 형식)
========================================== */

function getDateVerText() {
    const now = new Date();
    const yy = String(now.getFullYear()).slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yy}${mm}${dd} ver.`;
}

function updateDateDisplay() {
    const text = dateToggle.checked ? getDateVerText() : "";
    dateTextRps.textContent = text;
    dateTextLr.textContent = text;
}

dateToggle.addEventListener("change", updateDateDisplay);

selfPairToggle.checked = selfPairVisible;
selfPairToggle.addEventListener("change", () => {
    selfPairVisible = selfPairToggle.checked;
    localStorage.setItem(SELF_PAIR_KEY, String(selfPairVisible));
    createTable();
});

createTable();
createLrGrid();
updateNavButtons();
renderGuide(currentTab);
renderLegend();
updateDateDisplay();

/* ==========================================
   탭 전환
========================================== */

function switchTab(tab) {
    currentTab = tab;

    if (tab === "rps") {
        captureAreaRps.classList.remove("hidden");
        captureAreaLr.classList.add("hidden");
        tabRps.classList.add("active");
        tabLr.classList.remove("active");
    } else {
        captureAreaLr.classList.remove("hidden");
        captureAreaRps.classList.add("hidden");
        tabLr.classList.add("active");
        tabRps.classList.remove("active");
    }

    renderGuide(tab);
    fitCaptureArea();
}

tabRps.addEventListener("click", () => switchTab("rps"));
tabLr.addEventListener("click", () => switchTab("lr"));

/* ==========================================
   앋페스 취향표 - 표 생성
========================================== */

function createTable() {
    table.innerHTML = "";

    const activeMembers = getActiveMembers();
    const visibleCols = activeMembers.filter(m => !hiddenCols.has(m.id));
    const visibleRows = activeMembers.filter(m => !hiddenRows.has(m.id));

    applyRpsSizing(visibleCols.length);

    const head = document.createElement("tr");
    const empty = document.createElement("th");
    empty.className = "corner";
    head.appendChild(empty);

    visibleCols.forEach(member => {
        const th = document.createElement("th");
        th.textContent = member.name;
        th.classList.add("clickable-header");

        th.addEventListener("click", () => {
            currentTarget = { type: "col", id: member.id };
            openModal(member.name);
        });

        head.appendChild(th);
    });

    table.appendChild(head);

    visibleRows.forEach(rowMember => {
        const tr = document.createElement("tr");

        const rowHead = document.createElement("th");
        rowHead.textContent = rowMember.name;
        rowHead.classList.add("clickable-header");

        rowHead.addEventListener("click", () => {
            currentTarget = { type: "row", id: rowMember.id };
            openModal(rowMember.name);
        });

        tr.appendChild(rowHead);

        visibleCols.forEach(colMember => {
            const td = document.createElement("td");
            const key = `${rowMember.id}-${colMember.id}`;
            td.dataset.key = key;

            td.textContent = getDisplayPairName(rowMember.id, colMember.id);

            if (rowMember.id === colMember.id) {
                td.classList.add("diagonal");
            }

            if (saveData[key]) {
                td.style.backgroundColor = saveData[key];
            }

            td.addEventListener("click", () => {
                currentTarget = { type: "cell", td, rowId: rowMember.id, colId: colMember.id };
                openModal(getPairName(rowMember.id, colMember.id));
            });

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });
}

/* ==========================================
   앋페스 취향표 - 이전/이후 (실행 취소)
========================================== */

function pushHistory() {
    historyStack.push(JSON.stringify(saveData));
    if (historyStack.length > HISTORY_LIMIT) {
        historyStack.shift();
    }
    redoStack = [];
    updateNavButtons();
}

function updateNavButtons() {
    undoBtn.disabled = historyStack.length === 0;
    redoBtn.disabled = redoStack.length === 0;
}

undoBtn.addEventListener("click", () => {
    if (historyStack.length === 0) return;

    redoStack.push(JSON.stringify(saveData));
    saveData = JSON.parse(historyStack.pop());

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    createTable();
    updateNavButtons();
});

redoBtn.addEventListener("click", () => {
    if (redoStack.length === 0) return;

    historyStack.push(JSON.stringify(saveData));
    saveData = JSON.parse(redoStack.pop());

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    createTable();
    updateNavButtons();
});

/* ==========================================
   색상 선택 모달
========================================== */

function openModal(titleText) {
    modalTitle.textContent = titleText;
    optionGrid.innerHTML = "";

    options.forEach(option => {
        const color = getOptionColor(option);
        const item = document.createElement("div");
        item.className = "option-card";

        const isNone = color.toLowerCase() === "#ffffff";

        item.innerHTML = `
            <span class="option-dot-wrap">
                <span class="option-dot${isNone ? " dashed" : ""}" style="background:${color}"></span>
                <label class="color-edit-btn" title="이 색상 직접 고르기">
                    &#9998;
                    <input type="color" class="color-edit-input" value="${color.length === 7 ? color : "#ffffff"}">
                </label>
            </span>
            <span class="option-label">${option.name}</span>
        `;

        // 카드(동그라미) 클릭 -> 이 색을 셀에 적용
        item.addEventListener("click", () => applySelection(getOptionColor(option)));

        // 연필 아이콘 클릭은 셀 적용과 별개로, 색상 피커만 열기
        const editBtn = item.querySelector(".color-edit-btn");
        const editInput = item.querySelector(".color-edit-input");
        editBtn.addEventListener("click", (e) => e.stopPropagation());
        editInput.addEventListener("click", (e) => e.stopPropagation());
        editInput.addEventListener("input", (e) => {
            const hex = e.target.value;
            item.querySelector(".option-dot").style.background = hex;
        });
        editInput.addEventListener("change", (e) => {
            setCustomColor(option.name, e.target.value);
            renderLegend();
        });

        optionGrid.appendChild(item);
    });

    const clearItem = document.createElement("div");
    clearItem.className = "option-card clear-card";
    clearItem.innerHTML = `
        <span class="option-dot">&#128465;</span>
        <span class="option-label">선택 지우기</span>
    `;
    clearItem.addEventListener("click", () => applySelection(null));
    optionGrid.appendChild(clearItem);

    renderModalExtra(titleText);

    modal.classList.remove("hidden");
}

/* 모달 하단(색상 기본값 되돌리기 + 행/열 숨기기 체크박스) 영역.
   모달을 열 때마다 currentTarget 기준으로 다시 그린다. */
function renderModalExtra(titleText) {
    if (!modalExtra) return;
    modalExtra.innerHTML = "";

    const resetLink = document.createElement("div");
    resetLink.className = "reset-colors-link";
    resetLink.textContent = "색상 기본값으로 되돌리기";
    resetLink.addEventListener("click", () => {
        resetCustomColors();
        renderLegend();
        openModal(titleText);
    });
    modalExtra.appendChild(resetLink);

    if (!currentTarget || (currentTarget.type !== "row" && currentTarget.type !== "col")) {
        return;
    }

    const member = MEMBER_MAP[currentTarget.id];
    const isRow = currentTarget.type === "row";
    const initial = isRow ? member.rowInitial : member.colInitial;
    const suffix = isRow ? "왼" : "른";
    const hiddenSet = isRow ? hiddenRows : hiddenCols;

    const hideLabel = document.createElement("label");
    hideLabel.className = "hide-toggle";

    const hideInput = document.createElement("input");
    hideInput.type = "checkbox";
    hideInput.checked = hiddenSet.has(member.id);

    hideInput.addEventListener("change", () => {
        if (hideInput.checked) {
            hiddenSet.add(member.id);
        } else {
            hiddenSet.delete(member.id);
        }
        saveHiddenState();
        createTable();
        modal.classList.add("hidden");
    });

    hideLabel.appendChild(hideInput);
    hideLabel.appendChild(document.createTextNode(`${initial}${suffix} 숨기기`));

    modalExtra.appendChild(hideLabel);
}

function setCellColor(td, key, color) {
    if (color) {
        if (td) td.style.backgroundColor = color;
        saveData[key] = color;
    } else {
        if (td) td.style.backgroundColor = "";
        delete saveData[key];
    }
}

function applySelection(color) {
    if (!currentTarget) return;

    pushHistory();

    const activeMembers = getActiveMembers();

    if (currentTarget.type === "cell") {
        const key = `${currentTarget.rowId}-${currentTarget.colId}`;
        setCellColor(currentTarget.td, key, color);
    } else if (currentTarget.type === "row") {
        const rowId = currentTarget.id;
        activeMembers.forEach(colMember => {
            const key = `${rowId}-${colMember.id}`;
            const td = table.querySelector(`td[data-key="${key}"]`);
            setCellColor(td, key, color);
        });
    } else if (currentTarget.type === "col") {
        const colId = currentTarget.id;
        activeMembers.forEach(rowMember => {
            const key = `${rowMember.id}-${colId}`;
            const td = table.querySelector(`td[data-key="${key}"]`);
            setCellColor(td, key, color);
        });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    modal.classList.add("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }

    if (e.target === saveModal) {
        saveModal.classList.add("hidden");
    }
});

/* ==========================================
   공수 취향표 - 기본 아바타 생성 (SVG)
========================================== */

function defaultAvatar(name, color) {
    const initial = name.charAt(0);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
            <rect width="160" height="160" fill="${color}" />
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
                font-family="Pretendard, Noto Sans KR, sans-serif"
                font-size="64" font-weight="800" fill="#ffffff">${initial}</text>
        </svg>
    `;
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

/* ==========================================
   공수 취향표 - 그리드 생성
========================================== */

function createLrGrid() {
    lrGrid.innerHTML = "";

    const activeMembers = getActiveMembers();
    const layout = getLrColumnLayout(activeMembers.length);
    const maxRows = Math.max(...layout);

    applyLrSizing(layout.length);

    /* 각 멤버가 몇 번째 열/행에 들어갈지 미리 계산 */
    const positions = [];
    let memberIndex = 0;
    layout.forEach((colCount, colIdx) => {
        for (let r = 0; r < colCount; r++) {
            positions.push({ column: colIdx + 1, row: r + 1 });
            memberIndex++;
        }
    });

    lrGrid.style.setProperty("--lr-rows", maxRows);

    activeMembers.forEach((member, i) => {
        const index = member.id;

        const row = document.createElement("div");
        row.className = "lr-row";

        const pos = positions[i];
        if (pos) {
            row.style.gridColumn = String(pos.column);
            row.style.gridRow = String(pos.row);
        }

        /* 아바타 */
        const avatar = document.createElement("div");
        avatar.className = "lr-avatar";
        avatar.dataset.index = index;

        const img = document.createElement("img");
        img.src = lrData.photos[index] || member.photo;
        img.alt = member.name;
        img.onerror = () => {
            img.onerror = null;
            img.src = defaultAvatar(member.name, member.color);
        };
        avatar.appendChild(img);

        const editHint = document.createElement("div");
        editHint.className = "avatar-edit";
        editHint.textContent = "사진 변경";
        avatar.appendChild(editHint);

        avatar.addEventListener("click", () => {
            currentPhotoIndex = index;
            photoInput.value = "";
            photoInput.click();
        });

        row.appendChild(avatar);

        /* 오른쪽 내용 (바 + 텍스트) */
        const content = document.createElement("div");
        content.className = "lr-content";

        const barWrap = document.createElement("div");
        barWrap.className = "lr-bar-wrap";

        const labelL = document.createElement("span");
        labelL.className = "lr-label-l";
        labelL.textContent = "L";

        const bar = document.createElement("div");
        bar.className = "lr-bar";
        bar.dataset.index = index;

        const filledCells = lrData.cells[index] || [];

        for (let c = 0; c < LR_CELL_COUNT; c++) {
            const cell = document.createElement("div");
            cell.className = "lr-cell";
            cell.dataset.cell = c;

            if (filledCells[c]) {
                cell.classList.add("filled");
            }

            cell.addEventListener("click", () => {
                toggleLrCell(index, c, cell);
            });

            bar.appendChild(cell);
        }

        const labelR = document.createElement("span");
        labelR.className = "lr-label-r";
        labelR.textContent = "R";

        barWrap.appendChild(labelL);
        barWrap.appendChild(bar);
        barWrap.appendChild(labelR);

        const textWrap = document.createElement("div");
        textWrap.className = "lr-text-wrap";

        const text = document.createElement("textarea");
        text.className = "lr-text";
        text.rows = 5;
        text.maxLength = 150;
        text.placeholder = "자유롭게 적어보세요";
        text.value = lrData.texts[index] || "";
        text.dataset.index = index;

        const charCount = document.createElement("span");
        charCount.className = "lr-char-count";
        charCount.textContent = `${text.value.length}/150`;

        text.addEventListener("input", () => {
            lrData.texts[index] = text.value;
            charCount.textContent = `${text.value.length}/150`;
            saveLrData();
        });

        textWrap.appendChild(text);
        textWrap.appendChild(charCount);

        content.appendChild(barWrap);
        content.appendChild(textWrap);

        row.appendChild(content);

        lrGrid.appendChild(row);
    });
}

function toggleLrCell(memberIndex, cellIndex, cellEl) {
    if (!lrData.cells[memberIndex]) {
        lrData.cells[memberIndex] = [];
    }

    lrData.cells[memberIndex][cellIndex] = !lrData.cells[memberIndex][cellIndex];
    cellEl.classList.toggle("filled");

    saveLrData();
}

function saveLrData() {
    localStorage.setItem(LR_STORAGE_KEY, JSON.stringify(lrData));
}

/* 사진 업로드 */
photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || currentPhotoIndex === null) return;

    const reader = new FileReader();

    reader.onload = () => {
        lrData.photos[currentPhotoIndex] = reader.result;
        saveLrData();

        const avatarEl = lrGrid.querySelector(`.lr-avatar[data-index="${currentPhotoIndex}"] img`);
        if (avatarEl) {
            avatarEl.src = reader.result;
        }
    };

    reader.readAsDataURL(file);
});

/* ==========================================
   초기화
========================================== */

resetBtn.addEventListener("click", () => {
    if (!confirm("현재 화면의 모든 선택을 초기화할까요?")) return;

    if (currentTab === "rps") {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(HIDDEN_KEY);
        saveData = {};
        hiddenRows = new Set();
        hiddenCols = new Set();
        historyStack = [];
        redoStack = [];
        updateNavButtons();
        createTable();
    } else {
        localStorage.removeItem(LR_STORAGE_KEY);
        lrData = { texts: {}, cells: {}, photos: {} };
        createLrGrid();
    }
});

/* ==========================================
   이미지 저장
========================================== */

/*
 * html2canvas는 <textarea> 내부 글자를 자기 방식대로 다시 그리는데,
 * 이 과정에서 줄바꿈(word-wrap)이 무시되고 한 줄로 이어져 박스 밖으로
 * 삐져나가는 문제가 있다. 캡처 직전에만 textarea를 똑같이 생긴
 * <div>로 바꿔치기해서 이 문제를 피하고, 캡처가 끝나면 원래대로 되돌린다.
 */
function prepareTextareasForCapture(area) {
    const textareas = area.querySelectorAll(".lr-text");
    const replacements = [];

    textareas.forEach(textarea => {
        const mirror = document.createElement("div");
        mirror.className = "lr-text lr-text-capture";
        mirror.textContent = textarea.value;

        textarea.style.display = "none";
        textarea.insertAdjacentElement("afterend", mirror);

        replacements.push({ textarea, mirror });
    });

    return replacements;
}

function restoreTextareasAfterCapture(replacements) {
    replacements.forEach(({ textarea, mirror }) => {
        mirror.remove();
        textarea.style.display = "";
    });
}

/*
 * 화면에 실제로 보이는 area를 직접 손대면(클래스 추가, transform 제거 등)
 * html2canvas가 이미지를 다 그릴 때까지 그 변경이 화면에 그대로 보여서
 * "제목이 커졌다가 돌아오는" 것 같은 깜빡임이 생긴다.
 * 이를 막기 위해 area를 화면 밖(안 보이는 위치)에 복제해두고,
 * 캡처에 필요한 모든 변경(캡처용 클래스, transform 제거, textarea 대체 등)은
 * 복제본에만 적용한 뒤 그 복제본을 캡처한다. 사용자 눈에 보이는 원본 area는
 * 저장 과정 내내 전혀 건드리지 않는다.
 */
function createOffscreenCaptureClone(area) {
    const clone = area.cloneNode(true);

    clone.removeAttribute("id");
    clone.classList.remove("hidden");
    clone.classList.add("capturing");
    clone.style.transform = "none";
    clone.style.transformOrigin = "";

    /* textarea는 cloneNode로 복제해도 사용자가 입력한 실제 값이 아니라
       처음 렌더링됐을 때의 값으로 복제될 수 있어, 원본의 현재 값을
       복제본에 그대로 옮겨 담는다. */
    const originalTextareas = area.querySelectorAll(".lr-text");
    const cloneTextareas = clone.querySelectorAll(".lr-text");
    originalTextareas.forEach((original, i) => {
        if (cloneTextareas[i]) {
            cloneTextareas[i].value = original.value;
        }
    });

    prepareTextareasForCapture(clone);

    const host = document.createElement("div");
    host.style.position = "fixed";
    host.style.top = "0";
    host.style.left = "-99999px";
    host.style.zIndex = "-1";
    host.style.pointerEvents = "none";
    host.appendChild(clone);
    document.body.appendChild(host);

    return { clone, host };
}

saveBtn.addEventListener("click", async () => {
    const buttonWrap = document.querySelector(".button-wrap");
    const tabWrap = document.querySelector(".tab-wrap");
    const area = currentTab === "rps" ? captureAreaRps : captureAreaLr;

    buttonWrap.style.display = "none";
    tabWrap.style.display = "none";
    dateToggleWrap.style.display = "none";

    const { clone, host } = createOffscreenCaptureClone(area);

    try {
        const canvas = await html2canvas(clone, {
            backgroundColor: "#ffffff",
            scale: 4,
            useCORS: true,
            logging: false,
            windowWidth: getCurrentCaptureWidth(),
            windowHeight: Math.max(clone.scrollHeight, 1600)
        });

        /*
         * data: URL 대신 Blob URL을 사용한다.
         * 표가 커지고 고화질(scale 4)로 캡처하면서 이미지 용량이 커졌는데,
         * 아이폰 사파리는 큰 data: URL을 <a download>로 다운로드할 때
         * "다운로드하시겠습니까?" 확인창까지만 뜨고 실제 저장은 안 되는
         * 경우가 있다. Blob URL은 이런 용량 제한 없이 정상적인
         * 다운로드(하단 진행 표시 → 다운로드 항목 저장)로 이어진다.
         */
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

        if (!blob) {
            throw new Error("이미지 변환에 실패했습니다.");
        }

        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
        }
        currentBlobUrl = URL.createObjectURL(blob);

        previewImage.src = currentBlobUrl;
        saveModal.classList.remove("hidden");

        const fileLabel = currentTab === "rps" ? "슼페스_취향표" : "공수_취향표";

        const link = document.createElement("a");
        link.href = currentBlobUrl;
        link.download = `SKZ_${fileLabel}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error(error);
        alert("이미지 저장 중 문제가 발생했습니다.");
    } finally {
        host.remove();
        buttonWrap.style.display = "flex";
        tabWrap.style.display = "flex";
        dateToggleWrap.style.display = "flex";
    }
});

closeSaveModal.addEventListener("click", () => {
    saveModal.classList.add("hidden");
});

/* ==========================================
   ESC
========================================== */

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.add("hidden");
        saveModal.classList.add("hidden");
    }
});

/* ==========================================
   모바일 자동 축소
========================================== */

function fitCaptureArea() {
    const area = currentTab === "rps" ? captureAreaRps : captureAreaLr;
    const wrap = scaleWrap;

    if (!area || !wrap) return;

    const screenWidth = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
    );

    if (screenWidth <= MOBILE_BREAKPOINT) {
        /* 모바일: 축소 대신 CSS 반응형 레이아웃을 그대로 사용하고,
           세로로 길어진 내용은 화면을 드래그해서 내려보는 방식으로 확인한다.
           applyRpsSizing()에서 지정한 데스크톱용 px 너비는 여기서 지워서
           모바일 CSS(width:100%)가 그대로 적용되도록 한다. */
        area.style.transform = "none";
        area.style.transformOrigin = "";
        wrap.style.width = "";
        wrap.style.height = "";

        captureAreaRps.style.width = "";
        captureAreaRps.style.paddingLeft = "";
        captureAreaRps.style.paddingRight = "";
        table.style.width = "";

        captureAreaLr.style.width = "";
        captureAreaLr.style.paddingLeft = "";
        captureAreaLr.style.paddingRight = "";
        lrGrid.style.width = "";
        return;
    }

    const captureW = getCurrentCaptureWidth();
    const scale = Math.min(1, screenWidth / captureW);

    area.style.transformOrigin = "top left";
    area.style.transform = `scale(${scale})`;

    wrap.style.width = `${captureW * scale}px`;
    wrap.style.height = `${area.scrollHeight * scale}px`;
}

fitCaptureArea();

window.addEventListener("load", fitCaptureArea);
window.addEventListener("resize", fitCaptureArea);

window.addEventListener("orientationchange", () => {
    setTimeout(fitCaptureArea, 200);
});