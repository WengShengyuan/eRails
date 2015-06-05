/**
 * 存储
 * @param {Object} keyStr
 * @param {Object} valueStr
 */
function muiSet(keyStr, valueStr){
	plus.storage.setItem(keyStr, valueStr);
}

/**
 * 取数
 * @param {Object} keyStr
 */
function muiGet(keyStr) {
	return plus.storage.getItem(keyStr);
}

/**
 * 根据key删除数据
 * @param {Object} keyStr
 */
function muiRemove(keyStr){
	plus.storage.removeItem(keyStr);
}

/**
 * 删除所有数据
 */
function muiRemoveAll() {
	var length = getLength();
	for(var i=0; i<length; i++){
		var keyStr = plus.storage.key(i);
		plus.storage.removeItem(keyStr);
	}
}

/**
 * 获取数据数量
 */
function muiGetLength() {
	return plus.storage.getLength();
}

/**
 * 获取某key
 * @param {Object} id 序号
 */
function muiGetKey(id){
	return plus.storage.key(id);
}


