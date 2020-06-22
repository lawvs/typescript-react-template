/* eslint-disable no-console */

const printBuildInfo = () => {
  if (process.env.NODE_ENV === 'development') {
    return
  }
  console.group('Build info')
  console.log('Project:', process.env.PROJECT_NAME)
  console.log(
    'Build date:',
    process.env.BUILD_DATE
      ? new Date(process.env.BUILD_DATE).toLocaleString()
      : 'Unknown',
  )
  console.log(
    'Environment:',
    `${process.env.NODE_ENV}${process.env.CI ? '(ci)' : ''}`,
  )
  console.log('Version:', process.env.VERSION)
  console.groupEnd()
}

printBuildInfo()