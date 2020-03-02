const initialState = {
    category: false,
    articles: [],
    total: 0,
    shippingAddress: '7 rue Alexandre Dumas, 94300 Saint-Ouen',
};

export function cart(state = initialState, action) {
    switch (action.type) {
        case "ADD_ARTICLE":
            for (var i = 0; i < state.articles.length; i++) {
                if(state.articles[i].id === action.article.id) {
                    return {
                        ...state,
                        articles: state.articles.map((article, j) => {
                            return i === j ? {
                                ...article, 
                                value: action.article.value
                            } : article
                        }),
                        total: state.total + action.article.price,
                    };
                } 
            }
            return {
                ...state,
                articles: [...state.articles, action.article],
                total: state.total + action.article.price,
            };
        case "REMOVE_ARTICLE":
            for (var i = 0; i < state.articles.length; i++) {
                if(state.articles[i].id === action.article.id) {
                    if(action.article.value === 0) {
                        let newArticles = [...state.articles];
                        newArticles.splice(i, 1);
                        return {
                            ...state,
                            articles: newArticles,
                            total: state.total - action.article.price,
                        };
                    } else {
                        return {
                            ...state,
                            articles: state.articles.map((article, j) => {
                                return i === j ? {
                                    ...article, 
                                    value: action.article.value
                                } : article
                            }),
                            total: state.total - action.article.price,
                        };
                    }
                } 
            };
        case "ADD_CATEGORY":
            return {
                ...state,
                category: action.category,
            };
        case "REMOVE_CATEGORY":
            return {
                ...state,
                category: false,
            };
        default:
        return initialState;
    }
}
