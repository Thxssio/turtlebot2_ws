# generated from catkin/cmake/template/pkg.context.pc.in
CATKIN_PACKAGE_PREFIX = ""
PROJECT_PKG_CONFIG_INCLUDE_DIRS = "${prefix}/include".split(';') if "${prefix}/include" != "" else []
PROJECT_CATKIN_DEPENDS = "ecl_config;ecl_errors;ecl_concepts;ecl_exceptions;ecl_time;ecl_utilities".replace(';', ' ')
PKG_CONFIG_LIBRARIES_WITH_PREFIX = "-lecl_threads;-lpthread".split(';') if "-lecl_threads;-lpthread" != "" else []
PROJECT_NAME = "ecl_threads"
PROJECT_SPACE_DIR = "/home/thxssio/turtlebot2_ws/install"
PROJECT_VERSION = "0.62.3"
