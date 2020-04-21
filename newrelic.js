'use strict'

exports.config = {
  app_name: ['SDC'],
  license_key: 'cf2e47d77b9cb0170025c850c633ff8815f0NRAL',
  logging: {
    level: 'trace',
    filepath: '../../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_pcf: false,
    detect_azure: false,
    detect_gcp: false,
    detect_docker: false
  },
  transaction_tracer: {
    enabled: true
  }
}
