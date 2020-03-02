
export const addArticleAction = payload => async (dispatch, getState) => {
	dispatch(addArticle(payload));
};

export const removeArticleAction = payload => async (dispatch, getState) => {
	dispatch(removeArticle(payload));
};

export const addCategoryAction = payload => async (dispatch, getState) => {
	dispatch(addCategory(payload));
};

export const removeCategoryAction = payload => async (dispatch, getState) => {
	dispatch(removeCategory(payload));
};

export const addArticle = toAdd => ({
	type: 'ADD_ARTICLE',
	article: toAdd,
});

export const removeArticle = toRemove => ({
	type: 'REMOVE_ARTICLE',
	article: toRemove
});

export const addCategory = toAdd => ({
	type: 'ADD_CATEGORY',
	category: toAdd,
});

export const removeCategory = toAdd => ({
	type: 'REMOVE_CATEGORY',
});