import { takeLatest, put } from "redux-saga/effects";

function* formListAsync(a) {
    let formList = localStorage.getItem('formList') ? JSON.parse(localStorage.getItem('formList')) : [];
    formList.push(a.value);
    yield localStorage.setItem('formList', JSON.stringify(formList));
    yield put({ type: "ADD_FORM_ASYNC", value: a.value.formTitle });
    yield put({ type: "RESET_FORM", value: null });
}

export function* watchFormlist() {
    yield takeLatest("ADD_FORM", formListAsync);
}
