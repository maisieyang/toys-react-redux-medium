import React, { useState } from 'react';

function ArticleTab() {
    const [tabs, setTabs] = useState(initTabsState);

    const onUserfeedClick = () => setTabs({ userfeed: true });
    const onGlobalfeedClick = () => setTabs({ globalfeed: true });
    const onTabfeedClick = (tag) => setTabs({ tagfeed: tag });

  return (
    <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {auth && (
            <li className="nav-item">
              <button
                className={cn('nav-link', { active: tabs.userfeed })}
                type="button"
                onClick={onUserfeedClick}
              >
                Your Feed
              </button>
            </li>
          )}
          <li className="nav-item">
            <button
              className={cn('nav-link', { active: tabs.globalfeed })}
              type="button"
              onClick={onGlobalfeedClick}
            >
              Global Feed
            </button>
          </li>
          {tabs.tagfeed && (
            <li className="nav-item">
              <button
                className={cn('nav-link', { active: tabs.tagfeed })}
                type="button"
              >
                #{tabs.tagfeed}
              </button>
            </li>
          )}
        </ul>
      </div>
  );
}