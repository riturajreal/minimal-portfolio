import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const GithubCalenderUI = () => {
  return (
    <section>
      <div className='px-4 py-4 border border-muted rounded-2xl'>
        <GitHubCalendar username="grubersjoe" />
      </div>
    </section>
  )
}

export default GithubCalenderUI