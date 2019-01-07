cmake_minimum_required( VERSION 3.0 )

project( media_lib )

# flags
set(CMAKE_VERBOSE_MAKEFILE on)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build.emscripten)

# include files
include_directories( ./include ./src )

# target
add_executable( binary ./src/main.cpp )
