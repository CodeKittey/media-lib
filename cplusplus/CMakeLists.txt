cmake_minimum_required( VERSION 3.0 )

project( media_lib )

# flags
set(CMAKE_VERBOSE_MAKEFILE on)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/build.emscripten)

# include files
include_directories( ./include ./src )

# target
add_executable( module ./src/main.cpp ./src/fibonacci.c)

if (${CMAKE_SYSTEM_NAME} MATCHES "Emscripten")
    set_target_properties(module PROPERTIES LINK_FLAGS "-o module.js --bind -s WASM=1 -Os -s MODULARIZE=1")
endif ()

# emcc main.cpp fibonacci.c -Os -s WASM=1 -s MODULARIZE=1 -o wasm/module.js