import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to trigger Adobe Target views on route changes
 * Maps routes to their corresponding view names for Adobe Target SPA implementation
 */
const useAdobeTargetView = () => {
    const location = useLocation();

    useEffect(() => {
        // Map routes to Adobe Target view names
        const viewNameMap = {
            '/': 'homeView',
            '/about': 'aboutView',
            '/services': 'servicesView',
            '/pricing': 'pricingView',
            '/products': 'productsView',
            '/product-detail-a': 'product-detail-a',
            '/product-detail-b': 'product-detail-b',
            '/cart': 'cartView',
            '/checkout': 'checkoutView',
            '/confirmation': 'orderConfirmationView'
        };

        // Get the view name based on current path
        const viewName = viewNameMap[location.pathname] || 'unknownView';

        // Trigger Adobe Target view
        if (window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === 'function') {
            window.adobe.target.triggerView(viewName);
            console.log(`[Adobe Target] triggerView called: ${viewName}`);
        } else {
            console.warn('[Adobe Target] adobe.target.triggerView is not available');
        }
    }, [location.pathname]);
};

export default useAdobeTargetView;
