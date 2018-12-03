import { injectGlobal } from "emotion";

export const vdsAvatar = theme => `
    display: inline-block;
    border: 2px solid ${theme && theme.color ? theme.color : '#000'};
`;

injectGlobal``;

export const vdsAvatarCompanyLogo = theme => `
    background-color: var(
        --theme-avatar-logo-background,
        var(--theme-navigation-background, #15195a)
    );
    display: inline-block;
    max-height: 28px;
    max-width: 40px;
    padding: 15px 10px;
`;

export const vdsAvatarInitials = theme => `
    background-color: var(
        --theme-avatar-logo-background,
        var(--theme-navigation-background, #15195a)
    );
    border-radius: 50px;
    color: var(--theme-button--default-text, #fff);
    display: inline-block;
    font-size: 1.42857rem;
    font-weight: var(--theme-font-weight--light, 300);
    height: 28px;
    line-height: 28px;
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    width: 28px;

    &:hover {
        text-decoration: none !important;
    }

    &:focus span,
    &:active span {
        background-color: transparent !important;
    }
`;

export const vdsAvatarLabel = theme => `
    height: 1px;
    left: -1000000px;
    overflow: hidden;
    position: absolute !important;
    top: auto;
    width: 1px;
`;

export const vdsAvatarPhoto = theme => `
    border-radius: 50px;
    display: inline-block;
    height: 50px;
    max-height: 50px;
    max-width: 50px;
    min-height: 50px;
    min-width: 50px;
    width: 50px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    div& {
        background-color: var(
            --theme-avatar-logo-background,
            var(--theme-navigation-background, #15195a)
        );
    }

    div& svg.visa-ui-icon {
        height: 24px;
        width: 24px;
        margin: 12px 13px;
    }

    div& svg.visa-ui-icon use {
        fill: var(
            --theme-avatar-logo-foreground,
            var(--theme-navigation-foreground, #fff)
        ) !important;
        height: 24px;
        width: 24px;
    }

    div& svg.visa-ui-icon use circle,
    div& svg.visa-ui-icon use ellipse,
    div& svg.visa-ui-icon use line,
    div& svg.visa-ui-icon use path,
    div& svg.visa-ui-icon use polygon,
    div& svg.visa-ui-icon use polyline,
    div& svg.visa-ui-icon use rect {
        fill: inherit;
        height: inherit;
        stroke: inherit;
        width: inherit;
    }

    div& svg.visa-ui-icon circle,
    div& svg.visa-ui-icon ellipse,
    div& svg.visa-ui-icon line,
    div& svg.visa-ui-icon path,
    div& svg.visa-ui-icon polygon,
    div& svg.visa-ui-icon polyline,
    div& svg.visa-ui-icon rect {
        fill: var(
            --theme-avatar-logo-foreground,
            var(--theme-navigation-foreground, #fff)
        ) !important;
    }

    img& {
        border-radius: 50px;
        display: inline-block;
        height: 50px;
        max-height: 50px;
        max-width: 50px;
        min-height: 50px;
        min-width: 50px;
        width: 50px;
    }
`;
