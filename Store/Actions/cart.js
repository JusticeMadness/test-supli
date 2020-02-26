
export const addArticleAction = payload => async (dispatch, getState) => {
	dispatch(addArticle(payload));
};


export const removeArticleAction = payload => async (dispatch, getState) => {
	dispatch(removeArticle(payload));
};

export const addArticle = toAdd => ({
	type: 'ADD_ARTICLE',
	article: toAdd,
});

export const removeArticle = toRemove => ({
	type: 'REMOVE_ARTICLE',
	article: toRemove
});
