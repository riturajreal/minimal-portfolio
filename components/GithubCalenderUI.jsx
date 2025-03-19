import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GithubCalenderUI = () => {
  return (
    <section>
      <div className='px-4 py-4 border border-muted rounded-2xl'>
        <GitHubCalendar username="GR-2004" />
      </div>
    </section>
  )
}

export default GithubCalenderUI