import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({
    children,
    activeClassName,
    href,
    excludeQuery = false,
    ...props
}: any) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || "";
    const queryToCompare = excludeQuery ? asPath.split("?")[0] : asPath;
    const className =
        queryToCompare === href
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link href={href} {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;
