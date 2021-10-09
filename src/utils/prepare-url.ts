const _utils = require("node_modules/next/dist/shared/lib/utils");
import {
    resolveHref,
    addBasePath,
} from "node_modules/next/dist/shared/lib/router/router";
function stripOrigin(url) {
    const origin = _utils.getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}

export function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = _utils.getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin
        ? resolvedHref
        : addBasePath(resolvedHref);
    const preparedAs = as
        ? stripOrigin(resolveHref(router, as))
        : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
    };
}
